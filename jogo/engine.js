(function(){
'use strict';
const T=16,MW=108,MH=74;let VW=240,VH=160;
// ---------- matérias (edital TJPB 2026 · TI – Desenvolvimento de Sistemas) ----------
// band 'esp' = Conhecimentos Específicos (40 questões + discursiva = 80 pts); 'ger' = Gerais (Português 10, RLM 10).
const SUBJ_DEFS=[
  {id:'infra',band:'esp',name:'Arquitetura, SO e Redes',city:'Porto dos Protocolos',color:'#3b82f6',theme:2},
  {id:'engsoft',band:'esp',name:'Engenharia de Software',city:'Vila Ágil',color:'#22c55e',theme:6},
  {id:'arqsoft',band:'esp',name:'Arquitetura de Software',city:'Burgo dos Padrões',color:'#a855f7',theme:1},
  {id:'algoritmos',band:'esp',name:'Algoritmos e Estruturas',city:'Vale dos Algoritmos',color:'#f59e0b',theme:3},
  {id:'bd',band:'esp',name:'Banco de Dados',city:'Porto dos Dados',color:'#6366f1',theme:4},
  {id:'linguagens',band:'esp',name:'Linguagens e Frameworks',city:'Forja do Código',color:'#ef4444',theme:5},
  {id:'sysdesign',band:'esp',name:'Design de Sistemas',city:'Cidade Escalável',color:'#0ea5e9',theme:4},
  {id:'devops',band:'esp',name:'DevOps e Nuvem',city:'Nuvem Alta',color:'#06b6d4',theme:6},
  {id:'seguranca',band:'esp',name:'Segurança e Qualidade',city:'Fortaleza Segura',color:'#dc2626',theme:2},
  {id:'govti',band:'esp',name:'Governança de TI',city:'Burgo da Governança',color:'#84cc16',theme:1},
  {id:'govjud',band:'esp',name:'Governança do Judiciário',city:'Cidade do CNJ',color:'#d4a017',theme:1},
  {id:'ia',band:'esp',name:'Inteligência Artificial',city:'Colônia Neural',color:'#ec4899',theme:3},
  {id:'mobile',band:'esp',name:'Desenvolvimento Mobile',city:'Ilha Mobile',color:'#14b8a6',theme:4},
  {id:'uiux',band:'esp',name:'UI/UX e Acessibilidade',city:'Praça Acessível',color:'#f97316',theme:0},
  {id:'discursiva',band:'esp',name:'Discursiva',city:'Arena da Discursiva',color:'#64748b',theme:5},
  {id:'portugues',band:'ger',name:'Português',city:'Vila das Letras',color:'#e8645a',theme:0},
  {id:'redacao',band:'ger',name:'Escrita Discursiva',city:'Oficina da Escrita',color:'#b45309',theme:1},
  {id:'logica',band:'ger',name:'Raciocínio Lógico',city:'Vale da Lógica',color:'#5a8fe8',theme:3},
  {id:'matematica',band:'ger',name:'Matemática e Estatística',city:'Vila dos Números',color:'#0891b2',theme:5}
];
const LEGACY_TOPICS=window.TOPICS||[];
window.STUDY=window.STUDY||{};
const SUBJECTS=SUBJ_DEFS.map(def=>{
  const pack=(window.MATERIAS||{})[def.id];
  const legacy=LEGACY_TOPICS.find(t=>t.id===def.id);
  let topic;
  if(pack){
    topic={id:def.id,name:'Casa de '+def.name,color:def.color,npcs:pack.npcs||[],boss:pack.boss||{name:'Professor',intro:'',questions:[]},match:pack.match};
    if(pack.study)window.STUDY[def.id]=pack.study;
  }else if(legacy){
    topic=Object.assign({},legacy,{color:def.color});
  }else{
    topic={id:def.id,name:'Casa de '+def.name,color:def.color,building:true,
      npcs:[{name:'Mestre de obras',lines:['🚧 Esta cidade ainda está em construção!','O professor de '+def.name+' está preparando as aulas. Volte em breve.']}],
      boss:{name:'Prof. em viagem',intro:'Ainda estou preparando a prova.',questions:[]}};
  }
  return Object.assign({},def,{topic,pack});
});
const TOPICS=SUBJECTS.map(s=>s.topic);
const TRIB_REQ=Math.ceil(SUBJECTS.length*0.75);
// quiz relâmpago: só lógica/matemática antigas + as perguntas de bate-pronto de cada matéria nova
if(window.MINIDATA&&MINIDATA.quick){
  MINIDATA.quick=MINIDATA.quick.filter(q=>/Lógica|Matemática/.test(q.topic||''));
  SUBJECTS.forEach(s=>((s.pack&&s.pack.quick)||[]).forEach(q=>MINIDATA.quick.push(Object.assign({topic:s.name},q))));
}

const cv=document.getElementById('c'),ctx=cv.getContext('2d');
const $=id=>document.getElementById(id);
const screenEl=$('screen'),hud=$('hud'),box=$('box'),battleEl=$('battle'),titleEl=$('title');
function syncViewport(){
  const r=screenEl.getBoundingClientRect();
  if(!r.width||!r.height)return;
  if(window.innerWidth<=900||window.innerHeight<=560){
    if(r.height>r.width){VW=192;VH=Math.max(160,Math.min(288,Math.round(VW*r.height/r.width)))}
    else{VH=160;VW=Math.max(200,Math.min(352,Math.round(VH*r.width/r.height)))}
  }else{VW=240;VH=160}
  if(cv.width!==VW||cv.height!==VH){cv.width=VW;cv.height=VH}
}
syncViewport();
addEventListener('resize',syncViewport);
addEventListener('orientationchange',()=>setTimeout(syncViewport,120));

// ---------- helpers de módulos opcionais ----------
const sfx=(n,a)=>{try{window.SFX&&SFX.play(n,a)}catch(e){}};
const music=t=>{try{window.SFX&&SFX.music(t)}catch(e){}};
const fx=(fn,...a)=>{try{if(window.FX&&FX[fn])return FX[fn](...a)}catch(e){}};
function transition(kind,mid,done){
  if(window.FX&&FX.transition){try{FX.transition(kind,mid,done);return}catch(e){}}
  mid&&mid();done&&done();
}
const $style=document.createElement('style');
$style.textContent=`
#modal{position:absolute;inset:0;display:none;background:#000b;z-index:30;align-items:center;justify-content:center;pointer-events:auto}
.mbox{background:#f8f8f0;border:5px solid #384060;border-radius:12px;padding:14px 18px;max-width:86%;max-height:88%;overflow:auto;color:#202030;font-size:16px;min-width:420px}
.mbox h2{margin:0 0 8px;font-size:22px}
.mbox .hint{font-size:13px;opacity:.7;margin-top:8px}
.row{padding:5px 8px;border-radius:6px;display:flex;justify-content:space-between;gap:14px;cursor:pointer}
.row.sel{background:#ffe27a}
.row.dim{opacity:.45}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.card{border:3px solid #999;border-radius:8px;padding:6px;font-size:12px;min-height:84px;background:#fff;line-height:1.2}
.card b{font-size:13px}
.card.common{border-color:#9aa}
.card.rare{border-color:#4a8fe8;background:linear-gradient(135deg,#fff,#dcebff)}
.card.epic{border-color:#a14ae8;background:linear-gradient(135deg,#fff,#efd9ff,#fff)}
.card.legend{border-color:#e8a21a;background:linear-gradient(120deg,#fff3b0,#ffd0f0,#b0f0ff,#fff3b0);background-size:300% 300%;animation:holo 3s linear infinite}
.card.myth{border-color:#e8453c;background:linear-gradient(120deg,#ff9a9a,#ffe27a,#9affc8,#9ab8ff,#ff9a9a);background-size:300% 300%;animation:holo 2s linear infinite}
.card.locked{background:#ddd;color:#888;border-style:dashed}
@keyframes holo{to{background-position:300% 0}}
#battle .actors{position:relative}
.blk.lunge-r{animation:lr .45s}
.blk.lunge-l{animation:ll .45s}
@keyframes lr{40%{transform:translateX(150px) scale(1.2)}100%{transform:none}}
@keyframes ll{40%{transform:translateX(-150px) scale(1.2)}100%{transform:none}}
.blk.hurt{animation:hurt .4s;filter:brightness(2)}
@keyframes hurt{25%{transform:translateX(-10px)}75%{transform:translateX(10px)}}
.blk.boom{animation:boom .9s forwards}
@keyframes boom{0%{transform:scale(1)}30%{transform:scale(1.6);filter:brightness(3)}100%{transform:scale(0);opacity:0}}
.blk.rage{box-shadow:0 0 25px 8px #ff3b30,inset -6px -6px 0 #0003;animation:rage .5s infinite alternate}
@keyframes rage{to{transform:scale(1.08)}}
.items{margin-top:auto;font-size:13px;opacity:.85;display:flex;gap:16px}
.bigmsg{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:56px;font-weight:bold;color:#ffd84a;text-shadow:4px 4px #b33,0 0 20px #000;text-align:center;background:#0008;gap:10px;z-index:5}
.bigmsg small{font-size:20px;color:#fff;text-shadow:2px 2px #000}
`;
document.head.appendChild($style);
const modal=document.createElement('div');modal.id='modal';screenEl.appendChild(modal);
const aulaFrame=document.createElement('iframe');aulaFrame.id='aula';aulaFrame.title='Aula';
aulaFrame.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0;display:none;z-index:40;background:#fffaf0';
screenEl.appendChild(aulaFrame);
let aulaCtx=null;
function openAula(tid,ci){
  aulaCtx={tid,ci};mode='aula';keys={};sfx('confirm');
  aulaFrame.src='aulas/'+tid+'.html#c='+ci+'&embed=1';aulaFrame.style.display='block';
  aulaFrame.onload=()=>{try{aulaFrame.contentWindow.focus()}catch(e){}};
}
function closeAula(){aulaFrame.style.display='none';aulaFrame.src='about:blank';mode=worldMode();window.focus();updateHud()}
window.addEventListener('message',e=>{
  const d=e.data;if(!d||d.source!=='aula'||!aulaCtx)return;
  const c=aulaCtx;
  if(d.type==='aula-close'){closeAula();aulaCtx=null}
  else if(d.type==='aula-done'){closeAula();aulaCtx=null;openChapter(c.tid,c.ci,true)}
});

// ---------- save ----------
let save={done:{},talked:{},tasks:{},coins:0,cards:{},skin:{color:'#e8453c',hat:'',trail:''},owned:{},inv:{fifty:0,skip:0,heart:0},buff:null,misses:{n:0,list:[]},visited:{},cave:false,muted:false,chests:{},study:{}};
try{const s=JSON.parse(localStorage.getItem('tjpbquest')||'{}');save=Object.assign(save,s);save.skin=Object.assign({color:'#e8453c',hat:'',trail:''},save.skin);save.inv=Object.assign({fifty:0,skip:0,heart:0},save.inv)}catch(e){}
const persist=()=>{try{localStorage.setItem('tjpbquest',JSON.stringify(save))}catch(e){}};
const sealCount=()=>TOPICS.filter(t=>save.done[t.id]).length;

// ---------- mapa ----------
// Duas bandas separadas por um rio: em cima CONHECIMENTOS ESPECÍFICOS (15 cidades, 80 pts),
// embaixo CONHECIMENTOS GERAIS (Português, Redação, hub, Lógica, Matemática).
// Cidades-ilha na mata, ligadas por trilhas estreitas de terra com curvas, becos e pontes.
const CITY_W=16,CITY_H=13,GAP_X=6,GAP_Y=5,RIVER={y0:53,y1:55},HUBD=99;
const colX=c=>2+c*(CITY_W+GAP_X);
const SPEC_OY=r=>2+r*(CITY_H+GAP_Y), GEN_OY=59;
const CELLS=[];
SUBJECTS.forEach((s,i)=>{if(s.band==='esp'){const c=i%5,r=Math.floor(i/5);CELLS.push({si:i,ox:colX(c),oy:SPEC_OY(r),c,r})}});
const GEN_ORDER=['portugues','redacao','HUB','logica','matematica'];
GEN_ORDER.forEach((id,c)=>{const si=SUBJECTS.findIndex(s=>s.id===id);CELLS.push({si:id==='HUB'?HUBD:si,ox:colX(c),oy:GEN_OY,c,r:3,hub:id==='HUB'})});
const HUBCELL=CELLS.find(c=>c.hub);
const cityO=si=>CELLS.find(c=>c.si===si)||HUBCELL;
function distOf(x,y){
  for(const c of CELLS)if(x>=c.ox&&x<c.ox+CITY_W&&y>=c.oy&&y<c.oy+CITY_H)return c.si;
  return -1;
}
const THEMES=window.THEMES||[];
const thOf=d=>d===HUBD?THEMES[6]:(d>=0&&SUBJECTS[d]?THEMES[SUBJECTS[d].theme]:null);
const themeAt=(x,y)=>thOf(distOf(x,y))||null;
const buildings=[];
CELLS.forEach(c=>{
  if(c.hub){
    buildings.push({kind:'cafe',id:'cafe',name:'Café do Foco',short:'Café',color:'#b5651d',x:c.ox+1,y:c.oy+1,d:HUBD});
    buildings.push({kind:'gallery',id:'gallery',name:'Galeria de Cartas',short:'Cartas',color:'#6a5acd',x:c.ox+9,y:c.oy+1,d:HUBD});
    buildings.push({kind:'tribunal',id:'tribunal',name:'Tribunal Final',short:'Tribunal',color:'#d4af37',x:c.ox+9,y:c.oy+7,d:HUBD,road:c.oy+11});
    return;
  }
  const s=SUBJECTS[c.si],t=s.topic;
  buildings.push({kind:'topic',id:t.id,t,name:t.name,short:'',color:s.color,x:c.ox+1,y:c.oy+1,d:c.si});
  buildings.push({kind:'library',id:'lib_'+t.id,t,name:'Biblioteca de '+s.name,short:'',color:s.color,x:c.ox+9,y:c.oy+1,d:c.si});
});
buildings.forEach(b=>{b.w=5;b.h=4;b.doorX=b.x+2;b.doorY=b.y+3;if(b.road==null)b.road=(b.d===HUBD?HUBCELL:cityO(b.d)).oy+6});
const solid=new Set(),path=new Set(),open=new Set(),water=new Set(),bridge=new Set(),trees=[],PROPS=[];
const k=(x,y)=>x+','+y;
function rnd(n){const s=Math.sin(n*127.1)*43758.5453;return s-Math.floor(s)}
function seg(x1,y1,x2,y2){
  const dx=Math.sign(x2-x1),dy=Math.sign(y2-y1);let x=x1,y=y1;
  for(;;){path.add(k(x,y));if(dx){open.add(k(x,y-1));open.add(k(x,y+1))}else{open.add(k(x-1,y));open.add(k(x+1,y))}
    if(x===x2&&y===y2)break;x+=dx;y+=dy}
}
const trail=pts=>{for(let i=0;i<pts.length-1;i++)seg(pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1])};
const clearing=(cx,cy)=>{for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++)open.add(k(cx+dx,cy+dy))};
// ruas internas
CELLS.forEach(c=>{
  for(let x=c.ox;x<c.ox+CITY_W;x++)path.add(k(x,c.oy+6));
  const yEnd=c.hub?c.oy+11:c.oy+CITY_H-1;
  for(let y=c.oy;y<=yEnd;y++)path.add(k(c.ox+7,y));
  if(c.hub)for(let x=c.ox+7;x<=c.ox+11;x++)path.add(k(x,c.oy+11));
});
// rio entre as bandas
for(let x=0;x<MW;x++)for(let y=RIVER.y0;y<=RIVER.y1;y++)water.add(k(x,y));
// trilhas horizontais (mesma linha), com curva
const rowsOf={};CELLS.forEach(c=>{(rowsOf[c.r]=rowsOf[c.r]||[]).push(c)});
const MIRANTE_AT=[[0,1],[1,2],[2,0],[2,3]],mirantes=[];
Object.values(rowsOf).forEach(row=>{row.sort((a,b)=>a.c-b.c);for(let i=0;i<row.length-1;i++){
  const a=row[i],y=a.oy+6,j=((a.c+a.r)%2)?3:-3,x0=a.ox+CITY_W;
  trail([[x0,y],[x0+1,y],[x0+1,y+j],[x0+4,y+j],[x0+4,y],[x0+5,y]]);
  if(MIRANTE_AT.some(([r,c])=>r===a.r&&c===a.c)){const sg=Math.sign(j),mx=x0+2;
    trail([[mx,y+j+sg],[mx,y+j+2*sg]]);clearing(mx,y+j+3*sg);mirantes.push({x:mx,y:y+j+3*sg})}
}});
// trilhas verticais dentro da banda dos específicos (alternando colunas = becos e caminhos longos)
CELLS.filter(c=>!c.hub&&c.r<2).forEach(c=>{
  if(!(c.r===0?[0,2,4]:[1,3]).includes(c.c))return;
  const x=c.ox+7,y0=c.oy+CITY_H,j=(c.c%2)?2:-2;
  trail([[x,y0],[x,y0+1],[x+j,y0+1],[x+j,y0+3],[x,y0+3],[x,y0+4]]);
});
// pontes sobre o rio (colunas 0, 2 e 4)
[0,2,4].forEach(c=>{const x=colX(c)+7;for(let y=SPEC_OY(2)+CITY_H;y<GEN_OY;y++){path.add(k(x,y));open.add(k(x-1,y));open.add(k(x+1,y));if(water.has(k(x,y))){water.delete(k(x,y));bridge.add(k(x,y))}}});
const s0=CELLS[0],sp14=CELLS.find(c=>c.si===14)||CELLS[4],gPt=CELLS.find(c=>c.r===3&&c.c===0),gMat=CELLS.find(c=>c.r===3&&c.c===4);
const PADS=[{x:s0.ox+3,y:s0.oy+10,to:1},{x:gMat.ox+3,y:gMat.oy+10,to:0},{x:sp14.ox+3,y:sp14.oy+10,to:3},{x:gPt.ox+3,y:gPt.oy+10,to:2}];
const SECRET={x:s0.ox+9,y:s0.oy+CITY_H}; // árvore oca na beira da primeira trilha vertical
const REV={x:HUBCELL.ox+3,y:HUBCELL.oy+10};
const SPAWN={x:HUBCELL.ox+4,y:HUBCELL.oy+8};
buildings.forEach(b=>{
  for(let y=b.y+4;y<=b.road;y++)path.add(k(b.doorX,y));
  for(let yy=0;yy<b.h;yy++)for(let xx=0;xx<b.w;xx++)solid.add(k(b.x+xx,b.y+yy));
  solid.delete(k(b.doorX,b.doorY));
});
const MNAMES=['Mirante do Norte','Mirante do Vale','Recanto Escondido','Mirante do Rio'];
const CORNERS=mirantes.map((m,i)=>({id:['c_nw','c_ne','c_sw','c_se'][i],name:MNAMES[i],arrow:'🚩',x:m.x,y:m.y,cx:m.x+1,cy:m.y,bx:m.x-1,by:m.y}));
const SIGNS=CELLS.map(c=>({x:c.ox+8,y:c.oy+7}));
SIGNS.forEach(s=>PROPS.push({type:'sign',x:s.x,y:s.y}));
buildings.filter(b=>b.kind==='library').forEach(b=>PROPS.push({type:'libsign',x:b.doorX+1,y:b.y+4,b}));
CORNERS.forEach(c=>PROPS.push({type:'chest',id:c.id,x:c.cx,y:c.cy},{type:'bench',x:c.bx,y:c.by}));
const TRACKS=['north','east','south','h4','h3','west','h1','h2','h5','h6'];
function zoneAt(x,y){
  for(const c of CORNERS)if(Math.abs(x-c.x)<=2&&Math.abs(y-c.y)<=2)return{id:c.id,name:c.name,track:'nook'};
  const d=distOf(x,y);
  if(d===HUBD)return{id:'hub',name:'Paraíba Central',track:'town'};
  if(d<0)return{id:y<RIVER.y0?'wild_e':'wild_g',name:y<RIVER.y0?'Trilha · Banda dos Específicos':'Trilha · Banda dos Gerais',track:'nook'};
  const s=SUBJECTS[d];return{id:'d'+d,name:s.city+' · '+s.name,track:TRACKS[d%TRACKS.length]};
}
let curZoneId='',lastTrack=null,zoneName='';
function playWorld(){const z=zoneAt(P.x,P.y);curZoneId=z.id;zoneName=z.name;lastTrack=z.track;music(z.track)}
function syncZone(){const z=zoneAt(P.x,P.y);if(z.id!==curZoneId){const first=!curZoneId;curZoneId=z.id;zoneName=z.name;if(!first)fx('popup','📍 '+z.name,'','🗺');updateHud()}if(z.track!==lastTrack){lastTrack=z.track;music(z.track)}}
const TOWN_HOMES=[[SPAWN.x+2,SPAWN.y],[HUBCELL.ox+2,HUBCELL.oy+6],[gPt.ox+7,gPt.oy+6],[HUBCELL.ox+10,HUBCELL.oy+6],[CELLS[2].ox+7,CELLS[2].oy+6],[CELLS[7].ox+7,CELLS[7].oy+6],[CELLS.find(c=>c.r===3&&c.c===3).ox+7,GEN_OY+6]];
const special=new Set(PADS.map(p=>k(p.x,p.y)));special.add(k(REV.x,REV.y));special.add(k(SPAWN.x,SPAWN.y));
TOWN_HOMES.forEach(([x,y])=>special.add(k(x,y)));
PROPS.forEach(p=>{special.add(k(p.x,p.y));solid.add(k(p.x,p.y))});
CORNERS.forEach(c=>special.add(k(c.x,c.y)));
const nearBuilding=(x,y)=>buildings.some(b=>x>=b.x-1&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h+1);
function placeDeco(d,x,y,r,treeFrom){
  const kk=k(x,y);
  if(distOf(x,y)!==d||path.has(kk)||solid.has(kk)||special.has(kk)||nearBuilding(x,y))return;
  if(r<treeFrom)PROPS.push({type:'deco',kind:['a','b','c'][Math.floor(r/treeFrom*3)],x,y,d});
  else trees.push([x,y]);
  solid.add(kk);
}
CELLS.forEach((c,ci)=>{for(let i=0;i<12;i++)placeDeco(c.si,c.ox+1+Math.floor(rnd(ci*53+i*7+1)*14),c.oy+8+Math.floor(rnd(ci*31+i*13+5)*4),rnd(ci*17+i*3+9),c.hub?.8:.65)});
// mata fechada fora das cidades + bordas (água fica de fora)
for(let x=0;x<MW;x++)for(let y=0;y<MH;y++){
  const kk=k(x,y);
  if(path.has(kk)||solid.has(kk))continue;
  if(water.has(kk)){solid.add(kk);continue}
  const d=distOf(x,y);
  let tree=x<2||x>=MW-2||y<2||y>=MH-2;
  if(!tree&&d===-1&&!open.has(kk)&&!special.has(kk))tree=true;
  if(!tree&&d>=0&&d!==HUBD&&rnd(x*31+y*17)>0.95&&!special.has(kk)&&!nearBuilding(x,y))tree=true;
  if(tree){solid.add(kk);trees.push([x,y])}
}

// ---------- estado ----------
let mode='title'; // title|world|room|dialog|battle|modal|mini|trans
let scene='world',room=null;
const P={x:SPAWN.x,y:SPAWN.y,px:SPAWN.x*T,py:SPAWN.y*T,dir:'down',moving:false,t:0,tx:0,ty:0,step:0};
let keys={},gameHour=9,weatherT=60,fwT=2,trailT=0,padCool=false,tNow=0;
const DIRS={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
const OPP={up:'down',down:'up',left:'right',right:'left'};
const ROOM_W=10,ROOM_H=8;
const talkedOf=id=>(save.talked[id]=save.talked[id]||{});
const allTalked=t=>t.npcs.every((n,i)=>talkedOf(t.id)[i]);
const worldMode=()=>scene==='world'?'world':'room';

// ---------- cartas ----------
const RARITY=['common','rare','epic'];
const RNAME={common:'Comum',rare:'Rara',epic:'Épica',legend:'Lendária',myth:'Mítica'};
const ALLCARDS=[];
TOPICS.forEach(t=>{
  t.npcs.forEach((n,i)=>ALLCARDS.push({id:t.id+':'+i,name:n.name,topic:t.name,text:n.lines[0],rarity:RARITY[i%3]}));
  ALLCARDS.push({id:t.id+':boss',name:t.boss.name,topic:t.name,text:'Vencedor do teste da '+t.name,rarity:'legend'});
});
ALLCARDS.push({id:'secret',name:'Cartão Secreto',topic:'Caverna',text:'Você achou a árvore oca. Poucos acham.',rarity:'myth'});
function giveCard(id){
  if(save.cards[id])return;
  const c=ALLCARDS.find(c=>c.id===id);if(!c)return;
  save.cards[id]=true;persist();sfx('card');
  fx('popup','Nova carta! ('+RNAME[c.rarity]+')',c.name,'🃏');
}
function addCoins(n){save.coins+=n;persist();updateHud()}

// ---------- NPCs da cidade ----------
const TOWNIES=[
 {name:'Dev Gen Z',c:'#ff5fa2',home:TOWN_HOMES[0],lines:['mano, estudar pro TJPB é tipo upar de nível: tem que farmar questão.','a banca é tipo boss secreto, sempre vem com pegadinha.']},
 {name:'Vovó Zélia',c:'#9b6bd6',home:TOWN_HOMES[1],lines:['Antigamente a gente decorava a lei no grito, meu filho.','Dizem que tem uma árvore oca na trilha que sai da primeira cidade dos Específicos... 🌳']},
 {name:'Kauê Ninja',c:'#333',home:TOWN_HOMES[2],lines:['psiu, aperta M pra abrir o mapa e viajar rapidinho.','aperta C pra ver suas cartas colecionáveis. as lendárias são insanas.']},
 {name:'Moça do Café',c:'#ff9f43',home:TOWN_HOMES[3],lines:['O Café do Foco dá buff pra luta. Bora?','Moeda é pra gastar, estude e ganhe mais!']},
 {name:'Quiz Man',c:'#22c55e',home:TOWN_HOMES[4],quiz:true,lines:['Pergunta relâmpago!']},
 {name:'Dona Quizela',c:'#e8453c',home:TOWN_HOMES[5],quiz:true,lines:['Tá preparado? Pergunta relâmpago!']},
 {name:'Prof. Rápido',c:'#3b82f6',home:TOWN_HOMES[6],quiz:true,lines:['Respondeu certo = moeda!']}
].map((n,i)=>({...n,x:n.home[0],y:n.home[1],px:n.home[0]*T,py:n.home[1]*T,dir:'down',moving:false,t:0,wait:1+i*.7,cool:0,emote:null,emoteT:0,chase:false}));
const townOcc=(x,y,self)=>TOWNIES.some(n=>n!==self&&((n.x===x&&n.y===y)||(n.moving&&n.tx===x&&n.ty===y)));
function townWalk(x,y,self){
  if(x<2||y<2||x>=MW-2||y>=MH-2)return false;
  if(solid.has(k(x,y))||special.has(k(x,y)))return false;
  if(buildings.some(b=>b.doorX===x&&(b.doorY===y||b.doorY+1===y)))return false;
  if((P.x===x&&P.y===y)||(P.moving&&P.tx===x&&P.ty===y))return false;
  return !townOcc(x,y,self);
}
function updateTownies(dt){
  TOWNIES.forEach(n=>{
    n.cool=Math.max(0,n.cool-dt);
    if(n.emoteT>0)n.emoteT-=dt;
    const dist=Math.max(Math.abs(n.x-P.x),Math.abs(n.y-P.y)),manh=Math.abs(n.x-P.x)+Math.abs(n.y-P.y);
    if(n.moving){
      n.t+=dt*3;const f=Math.min(1,n.t);
      n.px=(n.x+(n.tx-n.x)*f)*T;n.py=(n.y+(n.ty-n.y)*f)*T;
      if(n.t>=1){n.x=n.tx;n.y=n.ty;n.px=n.x*T;n.py=n.y*T;n.moving=false}
      return;
    }
    if(mode!=='world')return;
    if(dist<=2&&!n.seen){n.seen=true;n.emote=n.quiz&&n.cool<=0?'!':'?';n.emoteT=1.2}
    if(dist>4)n.seen=false;
    if(n.quiz&&n.cool<=0&&window.MINI&&dist<=4){
      if(manh===1){startStreetQuiz(n);return}
      n.wait-=dt;if(n.wait>0)return;n.wait=.25;
      const opts=Object.keys(DIRS).map(d=>({d,x:n.x+DIRS[d][0],y:n.y+DIRS[d][1]})).filter(o=>townWalk(o.x,o.y,n)).sort((a,b)=>(Math.abs(a.x-P.x)+Math.abs(a.y-P.y))-(Math.abs(b.x-P.x)+Math.abs(b.y-P.y)));
      if(opts[0]){n.dir=opts[0].d;n.moving=true;n.t=0;n.tx=opts[0].x;n.ty=opts[0].y}
      return;
    }
    n.wait-=dt;
    if(n.wait<=0){
      n.wait=1+Math.random()*2.5;
      const d=Object.keys(DIRS)[Math.floor(Math.random()*4)],nx=n.x+DIRS[d][0],ny=n.y+DIRS[d][1];
      if(Math.abs(nx-n.home[0])<=4&&Math.abs(ny-n.home[1])<=3&&townWalk(nx,ny,n)){n.dir=d;n.moving=true;n.t=0;n.tx=nx;n.ty=ny}
    }
  });
}
function startStreetQuiz(n){
  n.dir=({x:0});
  n.dir=P.x<n.x?'left':P.x>n.x?'right':P.y<n.y?'up':'down';
  P.dir=OPP[n.dir];n.emote=null;
  keys={};
  say(n.name,[n.lines[0]],()=>runMini('quick',undefined,r=>{
    if(r&&r.win){n.cool=80;n.retry=false;addCoins(10);sfx('coin');fx('floatText',P.px-camX()+8,P.py-camY()-6,'+10 🪙','#ffd84a')}
    else{n.cool=6;n.retry=true;say(n.name,[r&&r.cancelled?'Sem pressa! Fala comigo de novo quando quiser.':'Quase! Fala comigo de novo pra tentar outra pergunta.'])}
  }));
}
function runMini(type,data,cb){
  if(!window.MINI){cb&&cb({win:false,cancelled:true});return}
  const prev=mode;mode='mini';music('mini');
  MINI.run(type,data,r=>{mode=worldMode();scene==='world'?playWorld():music(room&&room.music||'house');cb&&cb(r)});
}

// ---------- salas ----------
function makeRoom(b){
  const r={kind:b.kind,b,name:b.name,color:b.color,npcs:[],boss:null,objs:[],music:'house',ret:{x:b.doorX,y:b.doorY+1}};
  const cols=['#7a5bd6','#d67a5b','#4cb39b','#c9a227'];
  if(b.kind==='topic'){
    const t=b.t,pos=[[1,3],[8,3],[2,5]];
    t.npcs.forEach((n,i)=>r.npcs.push({n,i,x:pos[i][0],y:pos[i][1],c:cols[i%4],dir:'down',type:'teach'}));
    r.npcs.push({n:{name:'Estagiário'},i:'task',x:7,y:5,c:'#ffd84a',dir:'down',type:'task'});
    r.boss={x:4,y:2,t};r.music='h'+(TOPICS.indexOf(t)%6+1);if(t.building)r.npcs=r.npcs.filter(n=>n.type==='teach');
  }else if(b.kind==='cafe'){
    r.music='cafe';
    r.npcs.push({n:{name:'Barista'},x:3,y:2,c:'#ff9f43',dir:'down',type:'buffs'});
    r.npcs.push({n:{name:'Lojista'},x:7,y:3,c:'#22c55e',dir:'down',type:'shop'});
    r.objs.push({x:2,y:2,type:'counter'},{x:3,y:3,type:'counter'},{x:4,y:3,type:'counter'});
  }else if(b.kind==='library'){
    r.music='library';const t=b.t,S=studyOf(t.id);
    if(S){S.chapters.forEach((c,i)=>{if(i<7)r.objs.push({x:1+i,y:1,type:'chapter',t,ci:i})});r.objs.push({x:8,y:1,type:'chapter',t,ci:'sim'})}
    else r.objs.push({x:2,y:1,type:'shelf',t});
    r.npcs.push({n:{name:'Bibliotecário'},x:2,y:4,c:b.color,dir:'right',type:'libr'});
  }else if(b.kind==='gallery'){
    r.music='library';
    r.objs.push({x:4,y:2,type:'album'},{x:2,y:1,type:'shelf',t:TOPICS[0]});
    r.npcs.push({n:{name:'Curadora'},x:6,y:4,c:'#6a5acd',dir:'left',type:'gallery'});
  }else if(b.kind==='tribunal'){
    r.music='tribunal';
    const qs=[];shuffle(TOPICS).forEach(t=>shuffle(t.boss.questions).slice(0,1).forEach(q=>qs.push(q)));qs.splice(15);
    const t={id:'tribunal',name:'Tribunal Final',color:'#d4af37',npcs:[],boss:{name:'Des. Supremo',intro:'Chegou até aqui? Vou testar TUDO que você aprendeu. Todas as matérias, sem piedade.',questions:qs}};
    r.boss={x:4,y:2,t};
  }
  return r;
}
function makeCave(){
  const r={kind:'cave',name:'Caverna Secreta',color:'#4a3a6a',npcs:[{n:{name:'Eremita'},x:2,y:4,c:'#8fd3f4',dir:'right',type:'hermit'}],boss:null,objs:[{x:4,y:1,type:'chest'},{x:1,y:2,type:'crystal'},{x:8,y:3,type:'crystal'},{x:7,y:5,type:'crystal'}],music:'cave',ret:{x:2,y:9}};
  return r;
}
function makeRevision(){
  const list=save.misses.list.slice(-6);
  const all=[];TOPICS.forEach(t=>t.boss.questions.forEach(q=>all.push(q)));
  const qs=list.map(tx=>all.find(q=>q.q===tx)).filter(Boolean);
  while(qs.length<3&&all.length){const q=all[Math.floor(Math.random()*all.length)];if(!qs.includes(q))qs.push(q)}
  const t={id:'revisao',name:'Casa da Revisão',color:'#8e44ad',noSeal:true,npcs:[],boss:{name:'Mestre da Revisão',intro:'Eu vi seus erros... e vou fazer você nunca mais errar isso!',questions:qs}};
  return {kind:'revision',name:'Casa da Revisão',color:'#8e44ad',npcs:[],boss:{x:4,y:2,t},objs:[],music:'revision',ret:{x:REV.x,y:REV.y+1}};
}
function enterRoom(r,mid){
  mode='trans';
  transition('iris',()=>{
    room=r;scene='room';lastTrack=null;P.x=4;P.y=6;P.px=P.x*T;P.py=P.y*T;P.dir='up';P.moving=false;keys={};
    music(r.music);mid&&mid();updateHud();
  },()=>{mode='room'});
  sfx('door');
}
function leaveRoom(){
  mode='trans';
  transition('iris',()=>{
    const ret=room.ret;scene='world';room=null;
    P.x=ret.x;P.y=ret.y;P.px=P.x*T;P.py=P.y*T;P.dir='down';P.moving=false;keys={};
    playWorld();updateHud();
  },()=>{mode='world'});
}
function walkable(x,y){
  if(scene==='world'){
    if(x<0||y<0||x>=MW||y>=MH)return false;
    if(solid.has(k(x,y)))return false;
    return !TOWNIES.some(n=>(n.x===x&&n.y===y)||(n.moving&&n.tx===x&&n.ty===y));
  }
  if(x<0||y<0||x>=ROOM_W||y>=ROOM_H)return false;
  if(y===0)return false;
  if(y===1&&(x<=0||x>=ROOM_W-1))return false;
  if(room.boss&&room.boss.x===x&&room.boss.y===y)return false;
  if(room.npcs.some(n=>n.x===x&&n.y===y))return false;
  if(room.objs.some(o=>o.x===x&&o.y===y))return false;
  return true;
}

// ---------- diálogo ----------
let dlg=null;
function say(name,lines,done){
  dlg={name,lines:[].concat(lines),i:0,pos:0,done,prev:(mode==='dialog'||mode==='mini'||mode==='trans'||mode==='modal')?worldMode():mode};
  mode='dialog';box.style.display='block';
  const nm=box.querySelector('.nm');nm.textContent=name||'';nm.style.display=name?'block':'none';
  showLine();
}
function showLine(){dlg.pos=0;dlg.full=dlg.lines[dlg.i];box.querySelector('.tx').textContent=''}
function tickDialog(){
  if(!dlg)return;
  if(dlg.pos<dlg.full.length){const o=Math.floor(dlg.pos);dlg.pos=Math.min(dlg.full.length,dlg.pos+1.5);box.querySelector('.tx').textContent=dlg.full.slice(0,Math.floor(dlg.pos));if(Math.floor(dlg.pos)%3===0&&Math.floor(dlg.pos)!==o)sfx('tick')}
  box.querySelector('.nx').style.visibility=dlg.pos>=dlg.full.length?'visible':'hidden';
}
function advanceDialog(){
  if(dlg.pos<dlg.full.length){dlg.pos=dlg.full.length;box.querySelector('.tx').textContent=dlg.full;return}
  dlg.i++;sfx('select');
  if(dlg.i>=dlg.lines.length){const d=dlg;dlg=null;box.style.display='none';mode=d.prev;if(d.done)d.done()}
  else showLine();
}

// ---------- modal ----------
let modalKey=null;
function openModal(html,onKey){modal.innerHTML=html;modal.style.display='flex';modalKey=onKey;mode='modal'}
function closeModal(){modal.style.display='none';modalKey=null;if(modalCleanup){modalCleanup();modalCleanup=null}mode=worldMode();updateHud()}
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

function openAlbum(){
  const n=ALLCARDS.filter(c=>save.cards[c.id]).length;
  let h='<div class="mbox"><h2>🃏 Cartas '+n+'/'+ALLCARDS.length+'</h2><div class="cards">';
  ALLCARDS.forEach(c=>{
    if(save.cards[c.id])h+='<div class="card '+c.rarity+'"><b>'+esc(c.name)+'</b><br><i>'+RNAME[c.rarity]+' · '+esc(c.topic)+'</i><br>'+esc(c.text)+'</div>';
    else h+='<div class="card locked"><b>???</b><br>Converse com os NPCs pra desbloquear</div>';
  });
  h+='</div><div class="hint">Esc / Enter para fechar</div></div>';
  openModal(h,key=>{if(key==='Escape'||key==='Enter'||key===' '||key==='z'||key==='c')closeModal()});
}

// loja / café
const SHOP=[
 {id:'col_red',cat:'color',name:'Vermelho clássico',price:0,val:'#e8453c'},
 {id:'col_blue',cat:'color',name:'Azul elétrico',price:30,val:'#3b82f6'},
 {id:'col_pink',cat:'color',name:'Rosa choque',price:30,val:'#ff5fa2'},
 {id:'col_green',cat:'color',name:'Verde neon',price:30,val:'#22c55e'},
 {id:'col_black',cat:'color',name:'Preto ninja',price:40,val:'#333333'},
 {id:'col_gold',cat:'color',name:'Dourado lendário',price:60,val:'#f5c518'},
 {id:'hat_cap',cat:'hat',name:'🧢 Boné',price:40,val:'cap'},
 {id:'hat_party',cat:'hat',name:'🎉 Chapéu de festa',price:50,val:'party'},
 {id:'hat_halo',cat:'hat',name:'😇 Auréola',price:70,val:'halo'},
 {id:'hat_crown',cat:'hat',name:'👑 Coroa',price:80,val:'crown'},
 {id:'tr_spark',cat:'trail',name:'✨ Rastro de faíscas',price:60,val:'spark'},
 {id:'tr_fire',cat:'trail',name:'🔥 Rastro de fogo',price:90,val:'fire'},
 {id:'tr_rain',cat:'trail',name:'🌈 Rastro arco-íris',price:120,val:'rainbow'},
 {id:'inv_fifty',cat:'item',name:'50/50 (elimina 2 erradas)',price:25,inv:'fifty'},
 {id:'inv_skip',cat:'item',name:'Pular pergunta',price:40,inv:'skip'},
 {id:'inv_heart',cat:'item',name:'❤ Coração extra (próx. luta)',price:35,inv:'heart'}
];
const BUFFS=[
 {id:'b_cafe',name:'☕ Café forte',price:20,desc:'+2 ❤ na próxima luta',buff:{heart:2}},
 {id:'b_energ',name:'🥤 Energético',price:30,desc:'combo começa em x3',buff:{combo:3}},
 {id:'b_foco',name:'🧠 Foco total',price:25,desc:'+2 usos de 50/50 na próxima luta',buff:{fifty:2}}
];
function openShop(kind){
  const items=kind==='buffs'?BUFFS:SHOP;let sel=0,msg='';
  function render(){
    let h='<div class="mbox"><h2>'+(kind==='buffs'?'☕ Café do Foco':'🛍 Loja')+' · 🪙 '+save.coins+'</h2>';
    items.forEach((it,i)=>{
      let right;
      if(kind==='buffs')right=it.desc+' · 🪙'+it.price;
      else if(it.cat==='item')right='x'+save.inv[it.inv]+' · 🪙'+it.price;
      else{const own=!it.price||save.owned[it.id];const eq=save.skin[it.cat]===it.val;right=eq?'✔ equipado':own?'equipar':'🪙'+it.price}
      h+='<div class="row'+(i===sel?' sel':'')+'" data-i="'+i+'"><span>'+esc(it.name)+'</span><span>'+right+'</span></div>';
    });
    if(kind==='buffs'&&save.buff)h+='<div class="hint">Buff ativo: '+esc(JSON.stringify(save.buff))+'</div>';
    h+='<div class="hint">'+(msg||'↑↓ escolher · Enter comprar/equipar · Esc sair')+'</div></div>';
    modal.innerHTML=h;
    modal.querySelectorAll('.row').forEach(el=>el.onclick=()=>{sel=+el.dataset.i;act()});
  }
  function act(){
    const it=items[sel];
    if(kind==='buffs'){
      if(save.coins<it.price){msg='Moedas insuficientes!';sfx('error')}
      else{save.coins-=it.price;save.buff=Object.assign({},it.buff);msg='Buff aplicado!';sfx('coin')}
    }else if(it.cat==='item'){
      if(save.coins<it.price){msg='Moedas insuficientes!';sfx('error')}
      else{save.coins-=it.price;save.inv[it.inv]++;msg='Comprado!';sfx('coin')}
    }else{
      const own=!it.price||save.owned[it.id];
      if(!own){if(save.coins<it.price){msg='Moedas insuficientes!';sfx('error');render();return}save.coins-=it.price;save.owned[it.id]=true;sfx('coin')}
      save.skin[it.cat]=save.skin[it.cat]===it.val&&it.price?'' :it.val;
      msg='Equipado!';sfx('confirm');
    }
    persist();render();updateHud();
  }
  openModal('',key=>{
    if(key==='Escape'||key==='x'){closeModal();return}
    if(key==='ArrowUp'||key==='w'){sel=(sel+items.length-1)%items.length;sfx('select');render()}
    else if(key==='ArrowDown'||key==='s'){sel=(sel+1)%items.length;sfx('select');render()}
    else if(key==='Enter'||key===' '||key==='z')act();
  });
  render();
}

// mapa / fast travel
let modalCleanup=null;
function curWorldPos(){return scene==='world'?{x:P.x,y:P.y}:(room&&room.ret?{x:room.ret.x,y:room.ret.y}:{x:SPAWN.x,y:SPAWN.y})}
function teleportTo(x,y){
  closeModal();mode='trans';sfx('whoosh');
  transition('iris',()=>{scene='world';room=null;P.x=x;P.y=y;P.px=x*T;P.py=y*T;P.moving=false;P.dir='down';keys={};padCool=true;playWorld();updateHud()},()=>{mode='world'});
}
const KIND_ICON={topic:'🏠',cafe:'☕',library:'📚',tribunal:'🏛',gallery:'🃏'};
function mapSpots(){
  const s=[{name:'Paraíba Central',icon:'🏙',x:SPAWN.x+.5,y:SPAWN.y+.5,tx:SPAWN.x,ty:SPAWN.y,ok:true}];
  buildings.forEach(b=>s.push({name:b.name,icon:KIND_ICON[b.kind],x:b.x+2.5,y:b.y+2,tx:b.doorX,ty:b.doorY+1,ok:!!save.visited[b.id]}));
  CORNERS.forEach(c=>s.push({name:c.name,icon:'🚩',x:c.x+.5,y:c.y+.5,tx:c.x,ty:c.y,ok:!!save.visited[c.id]}));
  return s;
}
function paintMapBase(g,S0,spots){
  const S=17;g.save();g.scale(S0/17,S0/17);
  const W=MW*S,H=MH*S;
  const outline=(txt,x,y,font,fill,ali)=>{g.font=font;g.textAlign=ali||'center';g.lineWidth=3;g.strokeStyle='#fff';g.strokeText(txt,x,y);g.fillStyle=fill||'#3a2a1a';g.fillText(txt,x,y)};
  const mp=(x,y)=>{const th=thOf(distOf(x,y));return th&&th.map?th.map:{ground:['#86c974','#7fc36e'],path:'#ecdca6',tree:'#35984a'}};
  for(let y=0;y<MH;y++)for(let x=0;x<MW;x++){g.fillStyle=water.has(k(x,y))?'#3b8fd6':mp(x,y).ground[(x+y)%2];g.fillRect(x*S,y*S,S,S)}
  bridge.forEach(p=>{const[a,b]=p.split(',').map(Number);g.fillStyle='#a46a36';g.fillRect(a*S,b*S,S,S)});
  path.forEach(p=>{const[a,b]=p.split(',').map(Number);g.fillStyle=mp(a,b).path;g.fillRect(a*S,b*S,S,S);g.fillStyle='rgba(0,0,0,.08)';g.fillRect(a*S+3,b*S+8,3,2)});
  trees.forEach(([x,y])=>{const cx=(x+.5)*S,cy=(y+.5)*S,c=mp(x,y).tree;g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.arc(cx,cy+2,S*.55,0,7);g.fill();g.fillStyle=c;g.beginPath();g.arc(cx-1,cy-1,S*.47,0,7);g.fill();g.fillStyle='rgba(255,255,255,.25)';g.beginPath();g.arc(cx-3,cy-4,S*.16,0,7);g.fill()});
  PROPS.forEach(p=>{if(p.type==='deco'){g.fillStyle='rgba(255,255,255,.55)';g.fillRect(p.x*S+4,p.y*S+4,9,9)}});
  CELLS.forEach(c=>{const nm=c.hub?'PARAÍBA CENTRAL':SUBJECTS[c.si].city;outline(nm,(c.ox+8)*S,(c.oy+12.8)*S,'bold 30px "Courier New"',c.hub?'#7a2a00':'#5a3416')});
  outline('▲ CONHECIMENTOS ESPECÍFICOS · 40 questões + discursiva (80 pts)',W/2,(RIVER.y0-0.6)*S,'bold 34px "Courier New"','#1f3a7a');
  outline('▼ CONHECIMENTOS GERAIS · Português 10 + Raciocínio Lógico 10',W/2,(RIVER.y1+2.2)*S,'bold 34px "Courier New"','#1f5a2a');
  g.setLineDash([5,4]);g.strokeStyle='#8b6bd6';g.lineWidth=2;
  [[0,1],[2,3]].forEach(([a,b])=>{g.beginPath();g.moveTo((PADS[a].x+.5)*S,(PADS[a].y+.5)*S);g.lineTo((PADS[b].x+.5)*S,(PADS[b].y+.5)*S);g.stroke()});
  g.setLineDash([]);
  PADS.forEach(p=>{const cx=(p.x+.5)*S,cy=(p.y+.5)*S;g.fillStyle='#a78bfa';g.beginPath();g.arc(cx,cy,S*.45,0,7);g.fill();g.strokeStyle='#fff';g.lineWidth=2;g.beginPath();g.arc(cx,cy,S*.25,0,7);g.stroke()});
  SIGNS.forEach(sg=>{const x=sg.x*S,y=sg.y*S;g.fillStyle='#7a4a24';g.fillRect(x+7,y+8,3,9);g.fillStyle='#d9a45a';g.fillRect(x+1,y+2,15,8);g.strokeStyle='#5a3416';g.lineWidth=1;g.strokeRect(x+1.5,y+2.5,14,7);g.fillStyle='#5a3416';g.fillRect(x+4,y+5,9,2);g.fillRect(x+11,y+3,2,6)});
  CORNERS.forEach(c=>{const x=c.x*S,y=c.y*S;g.fillStyle='#e8453c';g.fillRect(x+7,y-8,2,16);g.fillStyle='#ff6b5a';g.beginPath();g.moveTo(x+9,y-8);g.lineTo(x+19,y-4);g.lineTo(x+9,y);g.fill();
    const op=save.chests[c.id];g.fillStyle=op?'#8a8a8a':'#d99a2b';g.fillRect(c.cx*S+2,c.cy*S+5,13,9);g.fillStyle='#5a3416';g.fillRect(c.cx*S+2,c.cy*S+8,13,2);
    g.fillStyle='#7a4a24';g.fillRect(c.bx*S+1,c.by*S+7,15,5)});
  if(save.cave){const x=SECRET.x*S,y=SECRET.y*S;g.fillStyle='#241f33';g.beginPath();g.arc(x+S/2,y+S/2+2,S*.45,Math.PI,0);g.fill();g.fillRect(x+1,y+S/2+2,S-2,5)}
  buildings.forEach(b=>{
    const x=b.x*S,y=b.y*S,w=b.w*S,h=b.h*S,vis=!!save.visited[b.id];
    const col=vis?b.color:'#9a9a9a',lib=b.kind==='library';
    g.fillStyle='#0003';g.fillRect(x+4,y+h-3,w,6);
    g.fillStyle=vis?(lib?'#ece4ff':'#f6ead0'):'#cfcfcf';g.fillRect(x+4,y+h*.42,w-8,h*.55);
    g.strokeStyle='#8a6a4a';g.lineWidth=2;g.strokeRect(x+4,y+h*.42,w-8,h*.55);
    g.fillStyle=col;g.beginPath();g.moveTo(x,y+h*.46);g.lineTo(x+w,y+h*.46);g.lineTo(x+w-14,y+5);g.lineTo(x+14,y+5);g.closePath();g.fill();
    g.strokeStyle='rgba(0,0,0,.35)';g.lineWidth=2;g.stroke();
    if(!lib){g.fillStyle='#a8553a';g.fillRect(x+w-26,y-2,8,12)}
    g.fillStyle=vis?'#8fd3f4':'#aaa';g.fillRect(x+12,y+h*.55,16,13);g.fillRect(x+w-28,y+h*.55,16,13);
    g.fillStyle='#8a5226';g.fillRect(b.doorX*S,y+h-20,S,20);
    g.fillStyle='#ffd84a';g.fillRect(b.doorX*S+S-5,y+h-10,3,3);
    g.textAlign='center';
    if(lib){g.font='15px sans-serif';g.fillText('📚',x+w/2,y+h*.42+4)}
    const isDone=b.kind==='library'?studyFrac(b.t.id)>=1:save.done[b.id];
    if(isDone){g.fillStyle='#ffd84a';g.font='20px sans-serif';g.fillText('★',x+w/2,y+h*.42+8)}
    if(b.kind==='tribunal'&&sealCount()<TRIB_REQ){g.font='16px sans-serif';g.fillText('🔒',x+w/2,y+h*.42+10)}
    if(b.short||!vis)outline(vis?b.short:'???',x+w/2,y+h+16,'bold 20px "Courier New"',vis?'#3a2a1a':'#777');
  });
  g.restore();
}
function openTravel(){
  const spots=mapSpots(),pos=curWorldPos();let sel=0;
  const S=6,CW=MW*S,CH=MH*S;
  openModal('<div class="mbox" style="max-width:97%;min-width:0;padding:10px 12px"><h2 style="margin:0 0 6px">🗺 Mapa de Paraíba City</h2><div style="display:flex;gap:12px"><canvas id="mapc" width="'+CW+'" height="'+CH+'" style="border:4px solid #7a5a3a;border-radius:6px;cursor:pointer;flex:none;width:'+CW+'px;height:'+CH+'px"></canvas><div id="mapl" style="min-width:200px;max-height:'+CH+'px;overflow:auto;font-size:14px"></div></div><div class="hint">↑↓ escolher · Enter viajar · clique nos lugares · Esc fechar · ⚪ roxos = portais</div></div>',key=>{
    if(key==='Escape'||key==='m'){closeModal();return}
    if(key==='ArrowUp'||key==='w'||key==='ArrowLeft'){sel=(sel+spots.length-1)%spots.length;sfx('select');renderList()}
    else if(key==='ArrowDown'||key==='s'||key==='ArrowRight'){sel=(sel+1)%spots.length;sfx('select');renderList()}
    else if(key==='Enter'||key===' '||key==='z')go();
  });
  const cvm=$('mapc'),g=cvm.getContext('2d'),list=$('mapl');
  const base=document.createElement('canvas');base.width=CW;base.height=CH;paintMapBase(base.getContext('2d'),S,spots);
  function renderList(){
    list.innerHTML=spots.map((s,i)=>'<div class="row'+(i===sel?' sel':'')+(s.ok?'':' dim')+'" data-i="'+i+'"><span>'+s.icon+' '+(s.ok?esc(s.name):'???')+'</span></div>').join('');
    list.querySelectorAll('.row').forEach(el=>el.onclick=()=>{sel=+el.dataset.i;go()});
    const cur=list.querySelector('.sel');cur&&cur.scrollIntoView({block:'nearest'});
  }
  function go(){const s=spots[sel];if(!s.ok){sfx('error');return}teleportTo(s.tx,s.ty)}
  cvm.onclick=e=>{
    const r=cvm.getBoundingClientRect(),mx=(e.clientX-r.left)*CW/r.width,my=(e.clientY-r.top)*CH/r.height;
    let best=-1,bd=1e9;spots.forEach((s,i)=>{const d=Math.hypot(s.x*S-mx,s.y*S-my);if(d<bd){bd=d;best=i}});
    if(bd<55){if(sel===best)go();else{sel=best;sfx('select');renderList()}}
  };
  let raf=0,run=true;
  function frame(){
    if(!run)return;const t=performance.now()/1000;
    g.drawImage(base,0,0);
    if(save.misses.n>=5){const cx=(REV.x+.5)*S,cy=(REV.y+.5)*S;g.fillStyle='#e84a8f';g.beginPath();g.arc(cx,cy,S*(.4+.1*Math.sin(t*5)),0,7);g.fill()}
    const s=spots[sel];
    g.strokeStyle='#ffd84a';g.lineWidth=4;g.beginPath();g.arc(s.x*S,s.y*S,22+Math.sin(t*6)*4,0,7);g.stroke();
    g.strokeStyle='#e8453c';g.lineWidth=2;g.beginPath();g.arc(s.x*S,s.y*S,22+Math.sin(t*6)*4,0,7);g.stroke();
    // você está aqui
    const px=(pos.x+.5)*S,py=(pos.y+.5)*S,bob=Math.sin(t*5)*3;
    g.fillStyle='#fff';g.beginPath();g.arc(px,py,7,0,7);g.fill();g.fillStyle='#e8453c';g.beginPath();g.arc(px,py,5,0,7);g.fill();
    g.fillStyle='#e8453c';g.beginPath();g.moveTo(px,py-9+bob);g.lineTo(px-6,py-19+bob);g.lineTo(px+6,py-19+bob);g.fill();
    g.font='bold 11px "Courier New"';g.textAlign='center';g.lineWidth=3;g.strokeStyle='#fff';g.strokeText('VOCÊ',px,py-23+bob);g.fillStyle='#e8453c';g.fillText('VOCÊ',px,py-23+bob);
    raf=requestAnimationFrame(frame);
  }
  modalCleanup=()=>{run=false;cancelAnimationFrame(raf)};
  renderList();frame();
}
function showLibSign(b){
  const s=SUBJECTS[b.d],S=studyOf(b.t.id);
  const pages=['Assunto: '+s.name+'\nCidade: '+s.city];
  if(S&&S.chapters&&S.chapters.length)pages.push('Capítulos:\n'+S.chapters.map((c,i)=>(i+1)+'. '+c.title).join(' · '));
  sfx('confirm');
  say('📚 '+b.name,pages);
}
function openSign(sg){
  CORNERS.forEach(c=>save.visited[c.id]=true);persist();
  const items=[{name:'🏙  Paraíba Central (hub)',x:SPAWN.x,y:SPAWN.y}].concat(SUBJECTS.map((d,i)=>({name:(d.band==='esp'?'🔷 ':'🔸 ')+d.city+' — '+d.name,x:cityO(i).ox+7,y:cityO(i).oy+6})),CORNERS.map(c=>({name:c.arrow+'  '+c.name,x:c.x,y:c.y})),[{name:'✖  Ficar por aqui'}]);let sel=0;
  function render(){
    let h='<div class="mbox"><h2>🪧 Placa de Paraíba City</h2><div class="hint" style="margin:0 0 8px">Para onde você quer ir?</div>';
    items.forEach((it,i)=>h+='<div class="row'+(i===sel?' sel':'')+'" data-i="'+i+'"><span>'+esc(it.name)+'</span></div>');
    h+='<div class="hint">↑↓ escolher · Enter ir · Esc sair</div></div>';
    modal.innerHTML=h;modal.querySelectorAll('.row').forEach(el=>el.onclick=()=>{sel=+el.dataset.i;go()});
  }
  function go(){const it=items[sel];if(it.x==null){closeModal();return}teleportTo(it.x,it.y)}
  openModal('',key=>{
    if(key==='Escape'){closeModal();return}
    if(key==='ArrowUp'||key==='w'){sel=(sel+items.length-1)%items.length;sfx('select');render()}
    else if(key==='ArrowDown'||key==='s'){sel=(sel+1)%items.length;sfx('select');render()}
    else if(key==='Enter'||key===' '||key==='z')go();
  });
  render();
}

// ---------- bibliotecas: estudo de verdade ----------
const studyOf=id=>(window.STUDY||{})[id];
function studyDone(id){return save.study&&save.study[id]||{}}
function studyFrac(id){const S=studyOf(id);if(!S||!S.chapters.length)return 0;return Object.keys(studyDone(id)).length/S.chapters.length}
function studyBonus(id){
  if(id==='tribunal'){let s=0;TOPICS.forEach(t=>s+=studyBonus(t.id));return Math.min(2,Math.floor(s/5))}
  const f=studyFrac(id);return f>=1?2:f>=.5?1:0;
}
function openChapter(tid,ci,fromAula){
  const S=studyOf(tid);if(!S)return;
  const sim=ci==='sim';
  let ch;
  if(sim){
    const all=[];S.chapters.forEach(c=>(c.quiz||[]).forEach(q=>all.push(q)));
    ch={title:'Simulado de revisão',pages:[],quiz:shuffle(all).slice(0,5)};
  }else ch=S.chapters[ci];
  let page=0,phase=(sim||fromAula)?'quiz':'read',qi=0,right=0,sel=0,opts=null,res=null;
  const lastPage=()=>page>=ch.pages.length-1;
  function newOpts(){const q=ch.quiz[qi];opts=shuffle(q.options.map((tx,i)=>({tx,ok:i===q.answer})));sel=0}
  function render(){
    let h='<div class="mbox" style="max-width:92%;min-width:600px"><h2>📖 '+esc(S.title)+(sim?'':' · Cap. '+(ci+1)+'/'+S.chapters.length)+'</h2><div style="font-weight:bold;margin-bottom:8px;font-size:18px">'+esc(ch.title)+'</div>';
    if(phase==='read'){
      h+='<div style="white-space:pre-wrap;font-size:17px;line-height:1.5;min-height:170px">'+esc(ch.pages[page])+'</div>';
      if(lastPage()&&ch.tip)h+='<div style="margin-top:10px;background:#fff3b0;border:3px solid #e8a21a;border-radius:8px;padding:8px 10px;font-size:15px">💡 '+esc(ch.tip)+'</div>';
      h+='<div class="hint">Página '+(page+1)+'/'+ch.pages.length+' · ←→ navegar · Enter '+(lastPage()?'treinar ✏️':'próxima')+' · Esc fechar</div>';
    }else if(phase==='quiz'){
      const q=ch.quiz[qi];
      h+='<div style="font-size:14px;opacity:.7">Treino '+(qi+1)+'/'+ch.quiz.length+'</div><div class="q" style="font-size:17px">'+esc(q.q)+'</div>';
      opts.forEach((o,i)=>h+='<div class="row'+(i===sel?' sel':'')+'" data-i="'+i+'"><span>'+'ABCDE'[i]+') '+esc(o.tx)+'</span></div>');
      h+='<div class="hint">↑↓ escolher · 1-'+opts.length+' · Enter confirmar · Esc fechar</div>';
    }else if(phase==='fb'){
      const q=ch.quiz[qi];
      h+='<div class="fb"><b class="'+(res?'ok':'no')+'">'+(res?'✔ Certo!':'✘ Errado')+'</b>\n\n'+esc(q.explain)+'</div><div class="hint">Enter continuar</div>';
    }else{
      const need=sim?4:1,pass=right>=need;
      h+='<div class="fb"><b class="'+(pass?'ok':'no')+'">'+(sim?'Simulado: ':'Treino: ')+right+'/'+ch.quiz.length+' acertos</b>\n\n'+(pass?(sim?'Mandou bem! +15 🪙':'Capítulo concluído! +5 🪙 e mais preparo para a luta contra o professor.'):'Releia o capítulo e tente de novo. Estudar repetido grava!')+'</div><div class="hint">Enter '+(pass?'fechar':'reler')+'</div>';
    }
    h+='</div>';modal.innerHTML=h;
    modal.querySelectorAll('.row').forEach(el=>el.onclick=()=>{sel=+el.dataset.i;confirm()});
  }
  function confirm(){
    res=opts[sel].ok;if(res)right++;sfx(res?'correct':'wrong');phase='fb';render();
  }
  function finish(){
    const need=sim?4:1,pass=right>=need;
    if(pass){
      if(sim){addCoins(15);sfx('coin')}
      else{
        const d=save.study[tid]=save.study[tid]||{};
        if(!d[ci]){d[ci]=true;addCoins(5);sfx('coin');persist();
          if(studyFrac(tid)>=1){addCoins(40);sfx('win');fx('confetti',2000);fx('popup','Biblioteca concluída!',S.title+' · +40 🪙 e +2 ❤ na luta','📚')}}
      }
    }
    phase='done';render();
  }
  openModal('',key=>{
    if(key==='Escape'){closeModal();return}
    if(phase==='read'){
      if(key==='ArrowRight'||key==='d'){if(page<ch.pages.length-1){page++;sfx('select');render()}}
      else if(key==='ArrowLeft'||key==='a'){if(page>0){page--;sfx('select');render()}}
      else if(key==='Enter'||key===' '||key==='z'){
        if(!lastPage()){page++;sfx('select');render()}
        else if(ch.quiz&&ch.quiz.length){phase='quiz';qi=0;right=0;newOpts();render()}
        else closeModal();
      }
    }else if(phase==='quiz'){
      if(key==='ArrowUp'||key==='w'){sel=(sel+opts.length-1)%opts.length;sfx('select');render()}
      else if(key==='ArrowDown'||key==='s'){sel=(sel+1)%opts.length;sfx('select');render()}
      else if(/^[1-5]$/.test(key)&&+key<=opts.length){sel=+key-1;confirm()}
      else if(key==='Enter'||key===' '||key==='z')confirm();
    }else if(phase==='fb'){
      if(key==='Enter'||key===' '||key==='z'){qi++;if(qi>=ch.quiz.length)finish();else{phase='quiz';newOpts();render()}}
    }else if(key==='Enter'||key===' '||key==='z'){
      const need=sim?4:1;
      if(right>=need)closeModal();else if(fromAula){closeModal();openAula(tid,ci)}else{phase=sim?'quiz':'read';page=0;qi=0;right=0;if(sim){ch.quiz=shuffle(ch.quiz);newOpts()}render()}
    }
  });
  if(phase==='quiz')newOpts();
  render();
}

// ---------- interação ----------
function facing(){const d=DIRS[P.dir];return[P.x+d[0],P.y+d[1]]}
function interact(){
  const[fx_,fy]=facing();
  if(scene==='world'){
    const n=TOWNIES.find(n=>n.x===fx_&&n.y===fy);
    if(n){n.dir=OPP[P.dir];
      if(n.quiz&&(n.cool<=0||n.retry)&&window.MINI)return startStreetQuiz(n);
      say(n.name,n.quiz?['Você já acertou a minha! Daqui a pouco tenho outra pra você.']:[n.lines[Math.floor(Math.random()*n.lines.length)]]);return}
    if(fx_===SECRET.x&&fy===SECRET.y){
      say('',['Essa árvore parece... oca? 🌳','*TOC TOC* ...tem uma passagem secreta!'],()=>{
        if(!save.cave)giveCard('secret');
        enterRoom(makeCave());fx('flash','#fff',150);
      });return}
    const pr=PROPS.find(p=>p.x===fx_&&p.y===fy);
    if(pr){
      if(pr.type==='sign'){sfx('confirm');openSign(pr);return}
      if(pr.type==='libsign'){showLibSign(pr.b);return}
      if(pr.type==='chest'){
        if(save.chests[pr.id]){say('',['O baú já está vazio.']);return}
        save.chests[pr.id]=true;persist();addCoins(25);sfx('win');fx('confetti',1200);say('',['Você achou um baú escondido! +25 moedas 🪙']);return}
      if(pr.type==='bench'){say('',['Você se senta no banco e curte a vista de Paraíba City. 🌄']);return}
    }
    return;
  }
  const npc=room.npcs.find(n=>n.x===fx_&&n.y===fy);
  if(npc){npc.dir=OPP[P.dir];return talkNpc(npc)}
  const obj=room.objs.find(o=>o.x===fx_&&o.y===fy);
  if(obj)return useObj(obj);
  if(room.boss&&room.boss.x===fx_&&room.boss.y===fy)return talkBoss();
}
function talkNpc(npc){
  const t=room.b&&room.b.t;
  if(npc.type==='teach'){
    say(npc.n.name,npc.n.lines,()=>{talkedOf(t.id)[npc.i]=true;persist();giveCard(t.id+':'+npc.i);updateHud()});
  }else if(npc.type==='task'){
    const type={portugues:'errorhunt',logica:'truth'}[t.id]||'match';
    if(save.tasks[t.id]){say(npc.n.name,['Você já completou meu desafio! Vai lá encarar o professor.']);return}
    if(!window.MINI){say(npc.n.name,['(minijogo indisponível)']);save.tasks[t.id]=true;return}
    say(npc.n.name,['Antes do chefe, um desafio rápido comigo!','Bora ver se você aprendeu?'],()=>runMini(type,type==='match'&&t.match?t.match:undefined,r=>{
      if(r&&r.win){save.tasks[t.id]=true;addCoins(20);sfx('coin');say(npc.n.name,['Mandou bem! Toma 20 moedas 🪙. Agora pode enfrentar o professor!'])}
      else if(r&&r.cancelled)say(npc.n.name,['Sem pressa. Volta quando quiser.']);
      else say(npc.n.name,['Não foi dessa vez... tenta de novo!']);
    }));
  }else if(npc.type==='buffs')say(npc.n.name,['Bem-vindo ao Café do Foco! Um buff antes da luta?'],()=>openShop('buffs'));
  else if(npc.type==='shop')say(npc.n.name,['Skins, rastros e itens de batalha! Dá uma olhada.'],()=>openShop('shop'));
  else if(npc.type==='libr'){const f=Math.round(studyFrac(room.b.t.id)*100);say(npc.n.name,['Cada estante numerada é um capítulo: abre uma AULA EM SLIDES, com desenhos e exemplos. Use ← → para passar.','No fim da aula você faz o treino do capítulo.','Você estudou '+f+'% desta biblioteca. 50% dá +1 ❤ e 100% dá +2 ❤ na luta contra o professor!','A última estante é o simulado.'])}
  else if(npc.type==='gallery')say(npc.n.name,['Aqui ficam suas cartas colecionáveis. Chegue na mesa e aperte Enter pra ver.','Conversar com os alunos e vencer professores gera cartas novas!']);
  else if(npc.type==='hermit'){
    if(save.cave)say(npc.n.name,['O baú já foi aberto. Sua curiosidade foi recompensada.']);
    else say(npc.n.name,['Você achou meu esconderijo! O baú só abre com a combinação lógica certa.','Resolva o enigma das alavancas...']);
  }
}
function useObj(o){
  if(o.type==='shelf'){
    const t=o.t,lines=[];
    t.npcs.forEach((n,i)=>{if(talkedOf(t.id)[i])lines.push('['+n.name+'] '+n.lines.join(' '))});
    if(!lines.length)say(t.name,['Esta estante está vazia pra você. Converse com os alunos da casa primeiro.']);
    else say('📚 '+t.name,lines);
  }else if(o.type==='chapter'){if(o.ci==='sim')openChapter(o.t.id,'sim');else openAula(o.t.id,o.ci)}
  else if(o.type==='album')openAlbum();
  else if(o.type==='counter')say('',['Um balcão cheio de pão de queijo. 🧀']);
  else if(o.type==='crystal')say('',['Um cristal brilhante... ele zumbe uma tabela-verdade. ✨']);
  else if(o.type==='chest'){
    if(save.cave){say('',['O baú está vazio.']);return}
    say('',['O baú tem uma trava lógica! Resolva o enigma.'],()=>runMini('truth',undefined,r=>{
      if(r&&r.win){save.cave=true;addCoins(100);sfx('win');fx('confetti',2500);fx('burst',120,70,{color:['#ffd84a','#fff'],n:30,speed:80});say('',['O baú abriu! +100 moedas 🪙','E um Cartão Mítico secreto!'],()=>giveCard('secret'))}
    }));
  }
}
function talkBoss(){
  const t=room.boss.t;
  if(room.kind==='tribunal'){say(t.boss.name,[t.boss.intro,'Prepare-se!'],()=>startBattle(t));return}
  if(room.kind==='revision'){say(t.boss.name,[t.boss.intro],()=>startBattle(t));return}
  if(!t.boss.questions||!t.boss.questions.length){say(t.boss.name,['🚧 Ainda estou preparando a prova desta matéria. Volte em breve!']);return}
  if(save.done[t.id]){say(t.boss.name,['Você já me venceu! Seu selo está garantido.']);return}
  if(!allTalked(t)){
    const falta=t.npcs.filter((n,i)=>!talkedOf(t.id)[i]).map(n=>n.name).join(', ');
    say(t.boss.name,['Ainda não! Primeiro aprenda com meus alunos.','Falta conversar com: '+falta+'.']);return}
  if(window.MINI&&!save.tasks[t.id]){say(t.boss.name,['Faça o desafio do Estagiário primeiro!']);return}
  const sb=studyBonus(t.id),pre=sb?['Vi que você estudou na biblioteca! (+'+sb+' ❤ nesta luta)']:[];
  say(t.boss.name,pre.concat([t.boss.intro,'Prepare-se para o teste!']),()=>startBattle(t));
}

// ---------- batalha ----------
let B=null;
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const TAUNTS=['Estudou na véspera, né? 😏','Essa até meu estagiário acertaria!','A banca não perdoa!','Errou feio, errou rude.','Hmm... dá pra melhorar!'];
function startBattle(t){
  const hpMax=t.boss.questions.length*10;
  B={t,queue:[],cur:null,hp:hpMax,hpMax,hearts:5+(save.buff&&save.buff.heart||0),combo:save.buff&&save.buff.combo||0,sel:0,phase:'ask',opts:null,last:null,rage:false,
     fiftyBuff:save.buff&&save.buff.fifty||0,used50:false,msg:''};
  if(save.inv.heart>0){save.inv.heart--;B.hearts++}
  B.hearts+=studyBonus(t.id);
  save.buff=null;persist();
  mode='trans';sfx('transition');music(null);lastTrack=null;
  transition('battle',()=>{battleEl.style.display='flex';nextQuestion(true)},()=>{mode='battle';music('battle');if(B.combo)fx('comboBadge',B.combo)});
}
function nextQuestion(first){
  if(!B.queue.length)B.queue=shuffle(B.t.boss.questions);
  B.cur=B.queue.pop();newAsk();
}
function newAsk(){
  const q=B.cur;
  B.opts=shuffle(q.options.map((tx,i)=>({tx,ok:i===q.answer,out:false})));
  B.sel=0;B.phase='ask';B.used50=false;renderBattle();
}
function renderBattle(anim){
  const q=B.cur,t=B.t;
  const hp=Math.max(0,B.hp/B.hpMax*100);
  const col=B.rage?'#ff3b30':t.color;
  let h='<div class="bossbar"><b>'+esc(t.boss.name)+(B.rage?' 🔥 FURIOSO':'')+'</b> · '+Math.max(0,B.hp)+'/'+B.hpMax+' PV<div class="bar"><i style="width:'+hp+'%"></i></div></div>';
  h+='<div class="arena actors" id="arena"><div class="blk" id="pblk" style="background:'+save.skin.color+'"></div><div class="blk'+(B.rage?' rage':'')+'" id="bblk" style="background:'+col+';width:80px;height:80px"></div></div>';
  h+='<div class="hearts" style="color:#e8453c">'+'♥'.repeat(Math.max(0,B.hearts))+(B.combo>1?' <b style="color:#e8453c">COMBO x'+B.combo+'</b>':'')+'<span style="float:right;font-size:14px">🪙 '+save.coins+'</span></div>';
  h+='<div class="qbox">';
  if(B.phase==='ask'){
    h+='<div class="q">'+esc(q.q)+'</div>';
    B.opts.forEach((o,i)=>{h+='<div class="opt'+(i===B.sel?' sel':'')+'" data-i="'+i+'" style="'+(o.out?'opacity:.25;text-decoration:line-through':'')+'">'+'ABCDE'[i]+') '+esc(o.tx)+'</div>'});
    const f=B.fiftyBuff+save.inv.fifty,sk=save.inv.skip;
    h+='<div class="items"><span>[F] 50/50 x'+f+'</span><span>[P] Pular x'+sk+'</span><span>[1-'+B.opts.length+'] responder</span></div>';
  }else{
    const ok=B.last.ok;
    h+='<div class="fb"><b class="'+(ok?'ok':'no')+'">'+B.msg+'</b>\n\n'+esc(q.explain)+'\n\n'+(ok?'[Enter] continuar':'[Enter] voltar para a luta (mesma pergunta)')+'</div>';
  }
  h+='</div>';
  battleEl.innerHTML=h;
  battleEl.querySelectorAll('.opt').forEach(el=>el.onclick=()=>{B.sel=+el.dataset.i;battleKey('Enter')});
  if(anim)anim();
}
function battleKey(key){
  if(B.phase==='ask'){
    const nO=B.opts.length;
    if(key==='ArrowUp'||key==='w'){B.sel=(B.sel+nO-1)%nO;sfx('select');renderBattle()}
    else if(key==='ArrowDown'||key==='s'){B.sel=(B.sel+1)%nO;sfx('select');renderBattle()}
    else if(/^[1-5]$/.test(key)&&+key<=nO){B.sel=+key-1;renderBattle();answer()}
    else if(key==='Enter'||key===' '||key==='z')answer();
    else if(key==='f'){
      if(B.used50)return;
      if(B.fiftyBuff>0)B.fiftyBuff--;else if(save.inv.fifty>0){save.inv.fifty--;persist()}else{sfx('error');return}
      let n=0;shuffle(B.opts.map((o,i)=>i)).forEach(i=>{if(!B.opts[i].ok&&n<2){B.opts[i].out=true;n++}});
      B.used50=true;sfx('pickup');renderBattle();
    }else if(key==='p'){
      if(save.inv.skip<=0){sfx('error');return}
      save.inv.skip--;persist();sfx('whoosh');nextQuestion();
    }
  }else if(key==='Enter'||key===' '||key==='z'){
    if(B.last.ok){if(B.hp<=0)return endBattle(true);nextQuestion()}
    else{if(B.hearts<=0)return endBattle(false);newAsk()}
  }
}
function answer(){
  const o=B.opts[B.sel];if(o.out){sfx('error');return}
  const ok=o.ok;B.last={ok};B.phase='fb';
  if(ok){
    B.combo++;
    const crit=B.combo>=3,dmg=10+Math.min(15,Math.max(0,B.combo-1)*3);
    B.hp-=dmg;addCoins(2+Math.floor(B.combo/2));
    B.msg='✔ ACERTOU! −'+dmg+' PV'+(crit?' · CRÍTICO! 🔥':'')+(B.combo>1?' · combo x'+B.combo:'');
    let phaseMsg='';
    if(!B.rage&&B.hp>0&&B.hp<=B.hpMax/2){B.rage=true;phaseMsg='\n⚠ O professor entrou em FASE 2!'}
    B.msg+=phaseMsg;
    renderBattle(()=>{
      const p=$('pblk'),b=$('bblk'),ar=$('arena');
      p&&p.classList.add('lunge-r');b&&setTimeout(()=>b.classList.add('hurt'),180);
      setTimeout(()=>{sfx(crit?'crit':'hit');sfx('correct');fx('damageNumber',ar,'-'+dmg+(crit?'!':''),72,20,crit?'#ffd84a':'#ff4040');fx('domBurst',ar,85,60,{color:crit?['#ffd84a','#ff7a00','#fff']:['#fff','#ff4040'],n:crit?22:12});fx('shake',battleEl,crit?10:5,300);fx('flash','#fff',90)},180);
      if(B.combo>1){sfx('combo',B.combo)}
      fx('comboBadge',B.combo);
      if(phaseMsg){setTimeout(()=>{sfx('phase');fx('vignette',true,'#ff0000');try{SFX.music('battle2')}catch(e){}fx('flash','#f00',250);fx('shake',battleEl,12,500)},500)}
    });
  }else{
    B.combo=0;B.hearts--;fx('comboBadge',0);
    B.msg='✘ ERROU! −1 ❤  '+TAUNTS[Math.floor(Math.random()*TAUNTS.length)]+'\nOuça a explicação:';
    if(!save.misses.list.includes(B.cur.q)){save.misses.list.push(B.cur.q);if(save.misses.list.length>30)save.misses.list.shift()}
    save.misses.n++;persist();
    renderBattle(()=>{
      const p=$('pblk'),b=$('bblk'),ar=$('arena');
      b&&b.classList.add('lunge-l');setTimeout(()=>{p&&p.classList.add('hurt');sfx('wrong');fx('damageNumber',ar,'−1 ❤',12,20,'#ff4040');fx('shake',battleEl,8,350);fx('flash','#f00',120)},180);
    });
  }
}
function endBattle(win){
  const t=B.t;fx('vignette',false);fx('comboBadge',0);
  if(win){
    sfx('win');music('victory');
    const bonus=t.noSeal?30:30+B.hearts*5,tribunal=t.id==='tribunal';
    renderBattle(()=>{const b=$('bblk');b&&b.classList.add('boom');fx('confetti',3500);fx('domBurst',$('arena'),85,60,{color:['#ffd84a','#ff4040','#4a8fe8','#fff'],n:40});fx('shake',battleEl,14,600)});
    setTimeout(()=>{
      const m=document.createElement('div');m.className='bigmsg';
      m.innerHTML='VITÓRIA!<small>'+(t.noSeal?'Revisão concluída':'Selo da '+esc(t.name)+' ★')+'<br>+'+bonus+' 🪙</small><small>[Enter]</small>';
      battleEl.appendChild(m);
      B.phase='victory';
    },1100);
    B.pendingWin={bonus,tribunal};
    B.phase='celebrate';
    battleKeyOverride=key=>{if(B.phase==='victory'&&(key==='Enter'||key===' '||key==='z'))closeBattle(true)};
  }else{
    sfx('lose');
    const m=document.createElement('div');m.className='bigmsg';m.style.color='#ff6b6b';
    m.innerHTML='DERROTA...<small>Estude com os alunos e volte!</small><small>[Enter]</small>';battleEl.appendChild(m);
    B.phase='lost';
    battleKeyOverride=key=>{if(key==='Enter'||key===' '||key==='z')closeBattle(false)};
  }
}
let battleKeyOverride=null;
function closeBattle(win){
  const t=B.t,pw=B.pendingWin;battleKeyOverride=null;
  battleEl.style.display='none';B=null;mode='room';music(room&&room.music||'house');
  if(win){
    addCoins(pw.bonus);
    if(t.id==='revisao'){save.misses={n:0,list:[]};persist()}
    else{save.done[t.id]=true;persist();giveCard(t.id+':boss')}
    updateHud();
    const n=sealCount();
    const lines=['Impressionante! Você me venceu!',t.noSeal?'Seus erros foram revisados!':'Aqui está o seu selo da '+t.name+'. ★'];
    if(t.id==='tribunal')lines.push('🏆 VOCÊ É O NOVO(A) SERVIDOR(A) DO TJPB! PARABÉNS, CAMPEÃO(Ã)!');
    else if(n>=TRIB_REQ&&!t.noSeal)lines.push('🏛 Selos suficientes! O Tribunal Final foi aberto!');
    say(t.boss.name,lines,()=>{if(t.noSeal)leaveRoom()});
  }else{
    if(t.id!=='tribunal'&&t.id!=='revisao'){save.talked[t.id]={};persist()}
    say(t.boss.name,['Seus corações acabaram... Estude mais e volte!']);
  }
}

// ---------- HUD ----------
function updateHud(){
  let txt='★ '+sealCount()+'/'+TOPICS.length+'  🪙 '+save.coins;
  if(scene==='room')txt=room.name+'  ·  '+txt;
  else{
    const near=buildings.find(b=>Math.abs(b.doorX-P.x)<=2&&Math.abs(b.doorY-P.y)<=2);
    if(near)txt=(save.done[near.id]?'★ ':'')+near.name+'  ·  '+txt;
    else txt='📍 '+zoneAt(P.x,P.y).name+'  ·  '+txt;
  }
  txt+='   [M]apa [C]artas [B]inaural [N]'+(save.muted?'🔇':'🔊');
  hud.textContent=txt;
}

// ---------- input ----------
const MAP={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right',W:'up',S:'down',A:'left',D:'right'};
function startGame(){
  titleEl.style.display='none';mode='world';
  try{window.SFX&&SFX.init();if(save.muted&&SFX.mute)SFX.mute(true)}catch(e){}
  fx('init');playWorld();updateHud();
}
addEventListener('keydown',e=>{
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key))e.preventDefault();
  const kk=e.key.length===1?e.key.toLowerCase():e.key;
  if(MAP[e.key]&&(mode==='world'||mode==='room'))keys[MAP[e.key]]=true;
  if(e.repeat)return;
  if(mode==='mini')return;
  if(mode==='aula'){if(kk==='Escape'){closeAula();aulaCtx=null}return}
  if(mode==='title'&&(kk==='Enter'||kk===' ')){startGame();return}
  if(mode==='dialog'&&(kk==='Enter'||kk===' '||kk==='z'))return advanceDialog();
  if(mode==='modal'){modalKey&&modalKey(kk);return}
  if(mode==='battle'){if(battleKeyOverride)return battleKeyOverride(kk);return battleKey(kk)}
  if(kk==='b'&&mode!=='title'){try{SFX.setBinaural(!SFX.binaural);fx('popup','Batida binaural '+(SFX.binaural?'ligada':'desligada'),'Use fones de ouvido','🎧')}catch(err){}return}
  if(kk==='n'&&mode!=='title'){save.muted=!save.muted;try{SFX.mute(save.muted)}catch(e){}persist();updateHud();return}
  if(mode==='world'||mode==='room'){
    if(kk==='Enter'||kk===' '||kk==='z')interact();
    else if(kk==='m')openTravel();
    else if(kk==='c')openAlbum();
  }
},true);
addEventListener('keyup',e=>{if(MAP[e.key])keys[MAP[e.key]]=false});
addEventListener('blur',()=>keys={});
document.addEventListener('click',()=>{if(mode==='title')startGame();else if(mode==='dialog')advanceDialog();else if(mode==='battle'&&battleKeyOverride)battleKeyOverride('Enter')});
cv.addEventListener('click',e=>{
  if(mode!=='world'||scene!=='world')return;
  const r=cv.getBoundingClientRect();
  const tx=Math.floor(((e.clientX-r.left)*VW/r.width+camX())/T);
  const ty=Math.floor(((e.clientY-r.top)*VH/r.height+camY())/T);
  const pr=PROPS.find(p=>p.type==='libsign'&&p.x===tx&&p.y===ty);
  if(pr){e.stopPropagation();showLibSign(pr.b)}
});
// ---------- controles móveis ----------
if('ontouchstart' in window||navigator.maxTouchPoints>0)document.body.classList.add('is-touch');
addEventListener('touchstart',()=>document.body.classList.add('is-touch'),{once:true,passive:true});
const DIR_KEY={up:'ArrowUp',down:'ArrowDown',left:'ArrowLeft',right:'ArrowRight'};
document.querySelectorAll('#mctrl [data-dir]').forEach(btn=>{
  const d=btn.dataset.dir;
  const press=e=>{
    e.preventDefault();e.stopPropagation();
    btn.classList.add('on');
    if(mode==='world'||mode==='room')keys[d]=true;
    else dispatchEvent(new KeyboardEvent('keydown',{key:DIR_KEY[d]}));
  };
  const rel=e=>{e.preventDefault();btn.classList.remove('on');keys[d]=false};
  btn.addEventListener('pointerdown',press);
  btn.addEventListener('pointerup',rel);
  btn.addEventListener('pointercancel',rel);
  btn.addEventListener('pointerleave',rel);
});
document.querySelectorAll('#mctrl [data-key]').forEach(btn=>{
  btn.addEventListener('pointerdown',e=>{
    e.preventDefault();e.stopPropagation();
    dispatchEvent(new KeyboardEvent('keydown',{key:btn.dataset.key}));
  });
  btn.addEventListener('click',e=>e.stopPropagation());
});

// ---------- update ----------
function camX(){return Math.round(Math.max(0,Math.min(MW*T-VW,P.px+8-VW/2)))}
function camY(){return Math.round(Math.max(0,Math.min(MH*T-VH,P.py+8-VH/2)))}
function update(dt){
  if(document.body.dataset.mode!==mode)document.body.dataset.mode=mode;
  tNow+=dt;tickDialog();
  fx('update',dt);
  if(mode==='title')return;
  if(scene==='world'){
    gameHour=(gameHour+dt*0.05)%24;fx('setTime',gameHour);if(mode==='world')syncZone();
    weatherT-=dt;if(weatherT<=0){weatherT=50+Math.random()*80;const w=['clear','clear','rain','leaves','snow','clear'][Math.floor(Math.random()*6)];fx('setWeather',w)}
    if(mode==='world'||mode==='dialog')updateTownies(dt);
    // fogos nas casas com selo
    fwT-=dt;
    if(fwT<=0&&(mode==='world'||mode==='dialog')){
      fwT=1.5+Math.random()*2;
      const ds=buildings.filter(b=>save.done[b.id]&&b.x*T-camX()>-40&&b.x*T-camX()<VW);
      if(ds.length){const b=ds[Math.floor(Math.random()*ds.length)],sx=b.x*T-camX()+b.w*T/2,sy=b.y*T-camY()-8;
        fx('burst',sx,sy,{color:['#ffd84a','#ff5fa2','#5ad6ff','#fff'],n:20,speed:45,life:.9,gravity:25});sfx('pickup')}
    }
  }
  if(mode!=='world'&&mode!=='room')return;
  if(!P.moving){
    const d=['up','down','left','right'].find(x=>keys[x]);
    if(d){
      P.dir=d;const v=DIRS[d],nx=P.x+v[0],ny=P.y+v[1];
      if(walkable(nx,ny)){P.moving=true;P.t=0;P.tx=nx;P.ty=ny}
    }
  }
  if(P.moving){
    P.t+=dt*7;P.step+=dt*14;
    const f=Math.min(1,P.t);
    P.px=(P.x+(P.tx-P.x)*f)*T;P.py=(P.y+(P.ty-P.y)*f)*T;
    if(P.t>=1){
      P.x=P.tx;P.y=P.ty;P.px=P.x*T;P.py=P.y*T;P.moving=false;
      if(Math.random()<.5)sfx('step');
      if(scene==='world')onWorldStep();
      else if(P.y>=ROOM_H-1&&(P.x===4||P.x===5))leaveRoom();
    }
  }
}
function onWorldStep(){
  buildings.forEach(b=>{if(!save.visited[b.id]&&Math.abs(b.doorX-P.x)<=3&&Math.abs(b.doorY-P.y)<=3){save.visited[b.id]=true;persist()}});
  CORNERS.forEach(c=>{if(!save.visited[c.id]&&Math.abs(c.x-P.x)<=2&&Math.abs(c.y-P.y)<=2){save.visited[c.id]=true;persist();fx('popup','Mirante descoberto!',c.name,'🚩')}});
  const b=buildings.find(b=>b.doorX===P.x&&b.doorY===P.y);
  if(b){
    if(b.kind==='tribunal'&&sealCount()<TRIB_REQ){
      P.y=b.doorY+1;P.py=P.y*T;sfx('error');say('🔒 Tribunal Final',['Trancado! Precisa de '+TRIB_REQ+' selos. Você tem '+sealCount()+'.']);return}
    save.visited[b.id]=true;enterRoom(makeRoom(b));return}
  const pad=PADS.findIndex(p=>p.x===P.x&&p.y===P.y);
  if(pad>=0&&!padCool){
    padCool=true;const dst=PADS[PADS[pad].to];mode='trans';sfx('whoosh');
    fx('burst',P.px-camX()+8,P.py-camY()+8,{color:['#a78bfa','#fff','#5ad6ff'],n:20,speed:60});
    transition('iris',()=>{P.x=dst.x;P.y=dst.y;P.px=P.x*T;P.py=P.y*T;keys={}},()=>{mode='world'});
    return;
  }
  if(pad<0)padCool=false;
  if(save.misses.n>=5&&P.x===REV.x&&P.y===REV.y){enterRoom(makeRevision());return}
  updateHud();
}

// ---------- desenho ----------
const R=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(x),Math.round(y),w,h)};
function tileGrass(x,y,ox,oy){
  const n=rnd(x*13+y*7),X=x*T-ox,Y=y*T-oy;
  R(X,Y,T,T,(x+y)%2?'#62c06a':'#5bb863');
  if(n>0.6){R(X+4,Y+5,1,2,'#3f9a4d');R(X+5,Y+6,1,1,'#3f9a4d')}
  if(n>0.88){R(X+9,Y+9,2,2,'#fff');R(X+9,Y+9,1,1,'#ffd84a')}
  else if(n<0.06)R(X+10,Y+4,2,2,'#ff7ab0');
}
function tilePath(x,y,ox,oy){
  const X=x*T-ox,Y=y*T-oy;R(X,Y,T,T,'#e3cb90');
  R(X+3,Y+4,2,1,'#c9ad6e');R(X+10,Y+11,2,1,'#c9ad6e');
  if(rnd(x*5+y*11)>0.5)R(X+8,Y+2,1,1,'#f4e3b0');
}
function drawTree(x,y,ox,oy){
  const X=x*T-ox,Y=y*T-oy,sec=x===SECRET.x&&y===SECRET.y;
  const th=themeAt(x,y);
  if(th&&th.tree){th.tree(ctx,X,Y,x,y,tNow);if(sec){R(X+6,Y+10,4,4,'#3b2410');if(Math.sin(tNow*3)>0.6)R(X+7,Y+11,2,2,'#a78bfa')}return}
  R(X+6,Y+9,4,6,'#7a4a24');
  R(X+2,Y+1,12,4,'#2f8a3f');R(X+1,Y+4,14,6,'#35984a');R(X+3,Y,8,2,'#40a857');R(X+4,Y+3,3,2,'#58c46b');
  R(X+1,Y+9,14,1,'#27743a');
  if(sec){R(X+6,Y+10,4,4,'#3b2410');if(Math.sin(tNow*3)>0.6){R(X+7,Y+11,2,2,'#a78bfa')}}
}
function darken(c,f){const n=parseInt(c.slice(1),16);const r=(n>>16)*f|0,g=((n>>8)&255)*f|0,b=(n&255)*f|0;return'rgb('+r+','+g+','+b+')'}
function drawBuilding(b,ox,oy){
  const th=thOf(b.d);
  if(!th||!th.house)return drawBuildingDefault(b,ox,oy);
  const X=b.x*T-ox,Y=b.y*T-oy,W=b.w*T,night=gameHour<6||gameHour>18.5,done=b.kind==='library'?studyFrac(b.t.id)>=1:!!save.done[b.id];
  R(X+3,Y+b.h*T-1,W,3,'#0003');
  th.house(ctx,b,X,Y,{night,lit:night||done,dx:b.doorX*T-ox,dy:b.doorY*T-oy,t:tNow});
  if(b.kind==='tribunal'&&sealCount()<TRIB_REQ){const dx=b.doorX*T-ox,dy=b.doorY*T-oy;R(dx+5,dy+2,6,5,'#555');R(dx+6,dy,4,3,'#999')}
  if(done){
    const cols=['#e8453c','#ffd84a','#4a8fe8','#22c55e','#ff5fa2'];
    for(let i=0;i<W;i+=6){const yy=Y+9+Math.round(Math.sin(i/12+tNow*2)*1.5);R(X+i,yy,4,1,'#333');R(X+i,yy+1,3,4,cols[(i/6|0)%5])}
    ctx.fillStyle='rgba(255,216,74,.18)';ctx.fillRect(X-2,Y-2,W+4,b.h*T+4);
    if(Math.sin(tNow*4+b.x)>0.2){R(X+4,Y+1,2,2,'#fff');R(X+W-8,Y+4,2,2,'#fff')}
  }
}
function drawBuildingDefault(b,ox,oy){
  const X=b.x*T-ox,Y=b.y*T-oy,W=b.w*T,c=b.color,done=save.done[b.id],night=gameHour<6||gameHour>18.5;
  R(X+3,Y+b.h*T-1,W,3,'#0003');
  R(X+2,Y+30,W-4,34,b.kind==='tribunal'?'#efe9d8':'#f6ead0');R(X+2,Y+30,W-4,2,'#d8c9a5');R(X+2,Y+62,W-4,2,'#b9a67e');
  for(let i=0;i<W-4;i+=8)R(X+2+i,Y+32,1,30,'#0000000d');
  R(X,Y+8,W,24,c);R(X+4,Y+3,W-8,6,c);R(X+10,Y,W-20,4,c);
  for(let r=0;r<4;r++){R(X,Y+10+r*6,W,1,darken(c,.72));for(let i=(r%2)*5;i<W;i+=10)R(X+i,Y+10+r*6,1,6,darken(c,.72))}
  R(X,Y+30,W,3,darken(c,.6));
  R(X+W-20,Y-4,8,12,'#a8553a');R(X+W-21,Y-5,10,3,'#7a3a28');
  const lit=night||done;
  [[X+8,Y+38],[X+W-24,Y+38]].forEach(([wx,wy])=>{R(wx-1,wy-1,18,16,'#7a5a3a');R(wx,wy,16,14,lit?'#ffe9a0':'#8fd3f4');R(wx+7,wy,2,14,'#7a5a3a');R(wx,wy+6,16,2,'#7a5a3a');if(!lit)R(wx+2,wy+1,3,3,'#d9f3ff');R(wx-2,wy+14,20,3,'#a8553a')});
  const dx=b.doorX*T-ox,dy=b.doorY*T-oy;
  R(dx+1,dy-2,14,18,'#5a3416');R(dx+2,dy-1,12,17,'#8a5226');R(dx+3,dy+1,4,6,'#a46a36');R(dx+9,dy+1,4,6,'#a46a36');R(dx+11,dy+9,2,2,'#ffd84a');
  R(dx-1,dy+14,18,2,'#b9a67e');
  R(X+W/2-9,Y+22,18,8,'#fff8');
  if(b.kind==='cafe'){R(X+W/2-4,Y+23,8,5,'#fff');R(X+W/2+4,Y+24,2,3,'#fff');R(X+W/2-3,Y+24,6,1,'#7a4a24');for(let i=0;i<W-4;i+=8)R(X+2+i,Y+30,4,4,'#e8453c')}
  else if(b.kind==='library'){R(X+W/2-6,Y+23,5,5,'#e8453c');R(X+W/2,Y+23,5,5,'#4a8fe8')}
  else if(b.kind==='tribunal'){[8,W-14].forEach(cx=>{R(X+cx,Y+33,6,29,'#fff');R(X+cx-1,Y+33,8,2,'#d8c9a5')});R(X+W/2-3,Y+23,6,5,'#b38b00');R(X+W/2-1,Y-9,2,10,'#555');R(X+W/2+1,Y-9,8,4,sealCount()>=TOPICS.length?'#ffd84a':'#888');
    if(sealCount()<TRIB_REQ){R(dx+5,dy+2,6,5,'#555');R(dx+6,dy,4,3,'#999')}}
  else if(done){R(X+W/2-4,Y+23,8,6,'#ffd84a');R(X+W/2-2,Y+24,4,4,'#fff3a0')}
  else R(X+W/2-6,Y+24,12,3,'#384060');
  if(done){
    // bandeirinhas de festa
    const cols=['#e8453c','#ffd84a','#4a8fe8','#22c55e','#ff5fa2'];
    for(let i=0;i<W;i+=6){const yy=Y+9+Math.round(Math.sin(i/12+tNow*2)*1.5);R(X+i,yy,4,1,'#333');R(X+i,yy+1,3,4,cols[(i/6)|0&0||(i/6|0)%5]);R(X+i+1,yy+5,1,1,cols[(i/6|0)%5])}
    ctx.fillStyle='rgba(255,216,74,.18)';ctx.fillRect(X-2,Y-2,W+4,b.h*T+4);
    const tw=Math.sin(tNow*4+b.x)>0.2;if(tw){R(X+4,Y+1,2,2,'#fff');R(X+W-8,Y+4,2,2,'#fff')}
  }
}
function drawBlock(x,y,color,dir,o){
  o=o||{};const bob=o.walk?Math.round(Math.sin(P.step)*1):0;
  ctx.fillStyle='#0003';ctx.fillRect(Math.round(x+3),Math.round(y+13),10,3);
  y+=bob;
  R(x+3,y+6,10,8,color);R(x+3,y+12,10,2,darken(color.length===7?color:'#888888',.7));
  R(x+4,y+14,3,2,'#333');R(x+9,y+14,3,2,'#333');
  R(x+4,y+1,8,6,'#f5d0a0');R(x+3,y,10,3,o.hair||'#3a2a1a');
  if(dir==='down'){R(x+5,y+4,1,2,'#222');R(x+10,y+4,1,2,'#222')}
  else if(dir==='left')R(x+4,y+4,1,2,'#222');
  else if(dir==='right')R(x+11,y+4,1,2,'#222');
  else R(x+3,y,10,4,o.hair||'#3a2a1a');
  if(o.crown){R(x+4,y-3,8,3,'#ffd84a');R(x+4,y-4,2,2,'#ffd84a');R(x+7,y-4,2,2,'#ffd84a');R(x+10,y-4,2,2,'#ffd84a')}
  if(o.tie)R(x+7,y+7,2,4,'#e8453c');
  if(o.glasses){ctx.strokeStyle='#222';ctx.strokeRect(x+4.5,y+3.5,3,2);ctx.strokeRect(x+8.5,y+3.5,3,2)}
  if(o.hat==='cap'){R(x+3,y-1,10,3,'#3b82f6');R(x+(dir==='left'?0:dir==='right'?10:3),y+2,6,1,'#2a60c0')}
  else if(o.hat==='crown'){R(x+4,y-3,8,3,'#ffd84a');R(x+4,y-4,2,2,'#ffd84a');R(x+7,y-4,2,2,'#ffd84a');R(x+10,y-4,2,2,'#ffd84a')}
  else if(o.hat==='party'){R(x+6,y-5,4,2,'#ff5fa2');R(x+5,y-3,6,2,'#ffd84a');R(x+4,y-1,8,1,'#5ad6ff');R(x+7,y-7,2,2,'#fff')}
  else if(o.hat==='halo'){R(x+4,y-4,8,1,'#ffe27a');R(x+3,y-3,1,1,'#ffe27a');R(x+12,y-3,1,1,'#ffe27a')}
}
function drawNpcSprite(n,ox,oy){
  drawBlock(n.px-ox,n.py-oy,n.c,n.dir,{walk:n.moving,hair:'#222'});
  if(n.emoteT>0&&n.emote){const X=n.px-ox+5,Y=n.py-oy-12;R(X-1,Y-1,8,9,'#fff');R(X,Y,6,7,'#fff');ctx.fillStyle=n.emote==='!'?'#e8453c':'#4a8fe8';ctx.fillRect(X+2,Y+1,2,3);ctx.fillRect(X+2,Y+5,2,1)}
  if(n.quiz&&n.cool<=0){R(n.px-ox+6,n.py-oy-6+Math.round(Math.sin(tNow*5)),4,4,'#ffd84a')}
}
function drawProp(p,ox,oy){
  const X=p.x*T-ox,Y=p.y*T-oy;
  if(p.type==='deco'){const th=thOf(p.d);if(th&&th.prop)th.prop(ctx,p.kind,X,Y,tNow);else{R(X+3,Y+6,10,8,'#3f9a4d');R(X+5,Y+4,6,4,'#58c46b')}return}
  if(p.type==='sign'){R(X+3,Y+14,10,2,'#0003');R(X+7,Y+7,2,8,'#7a4a24');R(X+1,Y+2,14,7,'#d9a45a');R(X+1,Y+2,14,1,'#f2c27a');R(X+1,Y+8,14,1,'#a8753a');R(X+3,Y+5,8,1,'#5a3416');R(X+10,Y+3,1,5,'#5a3416');R(X+9,Y+4,1,3,'#5a3416')}
  else if(p.type==='libsign'){R(X+3,Y+14,10,2,'#0003');R(X+7,Y+7,2,8,'#7a4a24');R(X+1,Y+2,14,7,'#ece4ff');R(X+1,Y+2,14,1,p.b.color);R(X+1,Y+8,14,1,'#7a4a24');R(X+3,Y+4,10,1,'#384060');R(X+3,Y+6,7,1,'#5a3416')}
  else if(p.type==='bench'){R(X+1,Y+14,14,2,'#0003');R(X+1,Y+6,14,3,'#a46a36');R(X+1,Y+3,14,2,'#8a5226');R(X+2,Y+9,2,5,'#5a3416');R(X+12,Y+9,2,5,'#5a3416')}
  else if(p.type==='chest'){const op=save.chests[p.id];R(X+1,Y+14,14,2,'#0003');R(X+1,Y+6,14,9,'#8a5226');R(X+1,Y+(op?3:6),14,op?3:2,'#a46a36');R(X+7,Y+8,2,3,'#ffd84a');if(!op&&Math.sin(tNow*4+p.x)>0.5)R(X+12,Y+3,2,2,'#fff')}
}
function drawPortal(x,y,ox,oy,c1,c2){
  const X=x*T-ox+8,Y=y*T-oy+8;
  for(let i=0;i<4;i++){const a=tNow*3+i*1.57,r=6-i;ctx.fillStyle=i%2?c1:c2;ctx.fillRect(Math.round(X+Math.cos(a)*r)-1,Math.round(Y+Math.sin(a)*r*.6)-1,3,3)}
  R(X-3,Y-1,6,3,c2);R(X-1,Y-3,2,7,c1);
}
function drawWorld(dt){
  const ox=camX(),oy=camY(),x0=Math.floor(ox/T),y0=Math.floor(oy/T);
  for(let y=y0;y<=y0+VH/T+1;y++)for(let x=x0;x<=x0+VW/T+1;x++){
    if(x<0||y<0||x>=MW||y>=MH)continue;
    const kk=k(x,y);
    if(water.has(kk)){const X=x*T-ox,Y=y*T-oy,w=Math.sin(tNow*2+x*.7+y)>0.3;R(X,Y,T,T,'#3b8fd6');R(X+2+(w?2:0),Y+4,5,1,'#8cc8f0');R(X+9-(w?2:0),Y+11,4,1,'#8cc8f0');continue}
    if(bridge.has(kk)){const X=x*T-ox,Y=y*T-oy;R(X,Y,T,T,'#3b8fd6');R(X+1,Y,14,T,'#a46a36');for(let i=0;i<4;i++)R(X+1,Y+i*4,14,1,'#7a4a24');R(X,Y,2,T,'#5a3416');R(X+14,Y,2,T,'#5a3416');continue}
    const th=themeAt(x,y);
    if(th&&th.ground)path.has(k(x,y))?th.path(ctx,x*T-ox,y*T-oy,x,y,tNow):th.ground(ctx,x*T-ox,y*T-oy,x,y,tNow);
    else path.has(k(x,y))?tilePath(x,y,ox,oy):tileGrass(x,y,ox,oy);
  }
  PADS.forEach(p=>drawPortal(p.x,p.y,ox,oy,'#a78bfa','#5ad6ff'));
  if(save.misses.n>=5)drawPortal(REV.x,REV.y,ox,oy,'#e84a8f','#8e44ad');
  const items=[];
  const vis=(x,y,w,h)=>x*T+w*T>=ox-16&&x*T<=ox+VW+16&&y*T+h*T>=oy-16&&y*T<=oy+VH+16;
  buildings.forEach(b=>{if(vis(b.x,b.y,b.w,b.h+1))items.push({y:b.y+b.h,f:()=>drawBuilding(b,ox,oy)})});
  trees.forEach(([x,y])=>{if(vis(x,y,1,1))items.push({y:y+1,f:()=>drawTree(x,y,ox,oy)})});
  PROPS.forEach(p=>{if(vis(p.x,p.y,1,1))items.push({y:p.y+1,f:()=>drawProp(p,ox,oy)})});
  TOWNIES.forEach(n=>items.push({y:n.py/T+1,f:()=>drawNpcSprite(n,ox,oy)}));
  items.push({y:P.py/T+1,f:()=>drawPlayer(ox,oy)});
  items.sort((a,b)=>a.y-b.y).forEach(i=>i.f());
  if(P.moving&&save.skin.trail){
    trailT-=dt;
    if(trailT<=0){trailT=.05;const tr=save.skin.trail;
      const col=tr==='fire'?['#ff7a00','#ffd84a','#e8453c']:tr==='rainbow'?['#e8453c','#ffd84a','#22c55e','#4a8fe8','#a14ae8']:['#fff','#ffd84a','#5ad6ff'];
      fx('burst',P.px-ox+8,P.py-oy+13,{color:col,n:2,speed:14,life:.5,gravity:tr==='fire'?-20:0,size:2})}
  }
}
function drawPlayer(ox,oy){drawBlock(P.px-ox,P.py-oy,save.skin.color,P.dir,{walk:P.moving,hair:'#222',hat:save.skin.hat})}
function drawMinimap(){
  const s=.5,w=MW*s,h=MH*s,X=VW-w-3,Y=3;
  ctx.fillStyle="rgba(0,0,0,.45)";ctx.fillRect(X-1,Y-1,w+2,h+2);
  ctx.fillStyle="rgba(98,192,106,.5)";ctx.fillRect(X,Y,w,h);
  ctx.fillStyle='#e3cb90';path.forEach(p=>{const[a,b]=p.split(',');ctx.fillRect(X+a*s,Y+b*s,s,s)});
  buildings.forEach(b=>{ctx.fillStyle=save.visited[b.id]?b.color:'#777';ctx.fillRect(X+b.x*s,Y+b.y*s,b.w*s,b.h*s);if(save.done[b.id]){ctx.fillStyle='#ffd84a';ctx.fillRect(X+(b.x+2)*s,Y+(b.y+1)*s,s,s)}});
  PADS.forEach(p=>{ctx.fillStyle='#a78bfa';ctx.fillRect(X+p.x*s,Y+p.y*s,s,s)});
  if(Math.floor(tNow*3)%2){ctx.fillStyle='#fff';ctx.fillRect(X+P.x*s-1.5,Y+P.y*s-1.5,4,4);ctx.fillStyle='#e8453c';ctx.fillRect(X+P.x*s-.5,Y+P.y*s-.5,2,2)}
}
function roomTheme(kind,c){
  switch(kind){
    case'cafe':return{f1:'#e8d8b8',f2:'#b5651d',wall:'#7a4a24'};
    case'library':return{f1:'#8b5a2b',f2:'#7d4f25',wall:'#4a2d15'};
    case'gallery':return{f1:'#e8e0f5',f2:'#d6cbee',wall:'#6a5acd'};
    case'cave':return{f1:'#4a4560',f2:'#3e3a52',wall:'#241f33'};
    case'tribunal':return{f1:'#efe9d8',f2:'#d4cdb4',wall:'#b38b00'};
    case'revision':return{f1:'#5a3a7a',f2:'#4a2d66',wall:'#2a1840'};
    default:return{f1:'#c8935a',f2:'#be8850',wall:darken(c,.8)};
  }
}
function drawRoom(){
  const th=roomTheme(room.kind,room.color),ox=40,oy=16;
  for(let y=0;y<ROOM_H;y++)for(let x=0;x<ROOM_W;x++){
    const X=x*T+ox,Y=y*T+oy;
    if(y===0){R(X,Y,T,T,th.wall);R(X,Y+T-3,T,3,darken(th.wall.startsWith('#')?th.wall:'#444444',.6))}
    else if(y===1&&(x===0||x===ROOM_W-1))R(X,Y,T,T,th.wall);
    else{R(X,Y,T,T,(x+y)%2?th.f1:th.f2);R(X,Y,T,1,'#0000001a')}
  }
  // tapete
  const rug=room.kind==='cave'?'#2a2540':darken(room.color,.9);
  for(let y=2;y<ROOM_H;y++)for(let x=4;x<=5;x++)R(x*T+ox+1,y*T+oy,14,16,rug);
  if(room.kind==='topic'||room.kind==='tribunal'||room.kind==='revision'){for(const bx of[1,2,7,8]){const X=bx*T+ox,Y=oy;R(X+1,Y+1,14,12,'#6b4423');['#e8453c','#4a8fe8','#ffd84a','#4cb39b','#d67a5b'].forEach((c,i)=>R(X+2+(i*2.6|0),Y+3,2,8,c));R(X+1,Y+7,14,1,'#4a2d15')}}
  if(room.kind==='tribunal'){for(const cx of[1,8])for(let y=1;y<7;y+=3){R(cx*T+ox+3,y*T+oy,10,16,'#fff');R(cx*T+ox+2,y*T+oy,12,2,'#d4af37')}}
  for(const x of[4,5]){R(x*T+ox,7*T+oy,T,T,'#f2ead0');R(x*T+ox+2,7*T+oy+6,12,3,'#c94a3a')}
  const items=[];
  room.objs.forEach(o=>items.push({y:o.y,f:()=>drawObj(o,ox,oy)}));
  room.npcs.forEach(n=>items.push({y:n.y,f:()=>{drawBlock(n.x*T+ox,n.y*T+oy,n.c,n.dir,n.type==='task'?{hat:'party'}:{});
    if(n.type==='teach'&&talkedOf(room.b.t.id)[n.i])R(n.x*T+ox+6,n.y*T+oy-4,4,3,'#ffd84a');
    if(n.type==='task'&&!save.tasks[room.b.t.id]&&window.MINI)R(n.x*T+ox+6,n.y*T+oy-6+Math.round(Math.sin(tNow*5)),4,4,'#e8453c')}}));
  if(room.boss)items.push({y:room.boss.y,f:()=>{const bt=room.boss.t;drawBlock(room.boss.x*T+ox,room.boss.y*T+oy,bt.color,'down',{crown:true,tie:true,glasses:true,hair:'#ddd'});R(room.boss.x*T+ox-12,room.boss.y*T+oy+10,40,6,'#5a3416')}});
  items.push({y:P.py/T,f:()=>drawBlock(P.px+ox,P.py+oy,save.skin.color,P.dir,{walk:P.moving,hair:'#222',hat:save.skin.hat})});
  items.sort((a,b)=>a.y-b.y).forEach(i=>i.f());
  if(room.kind==='cave'){ // escuridão com vinheta
    const g=ctx.createRadialGradient(P.px+ox+8,P.py+oy+8,16,P.px+ox+8,P.py+oy+8,90);
    g.addColorStop(0,'rgba(0,0,20,0)');g.addColorStop(1,'rgba(0,0,20,.75)');ctx.fillStyle=g;ctx.fillRect(0,0,VW,VH);
  }
}
function drawObj(o,ox,oy){
  const X=o.x*T+ox,Y=o.y*T+oy;
  if(o.type==='chapter'){R(X+1,Y+1,14,14,'#6b4423');R(X+2,Y+2,12,5,o.t.color);R(X+2,Y+9,12,5,darken(o.t.color,.8));[3,6,9,12].forEach(i=>{R(X+i,Y+3,2,3,'#fff6');R(X+i,Y+10,2,3,'#fff6')});
    const done=o.ci==='sim'?false:studyDone(o.t.id)[o.ci];if(done)R(X+6,Y+7,4,2,'#ffd84a');
    ctx.font='bold 7px monospace';ctx.textAlign='center';ctx.fillStyle='#000';ctx.fillText(o.ci==='sim'?'★':String(o.ci+1),X+8.5,Y+13.5);ctx.fillStyle='#fff';ctx.fillText(o.ci==='sim'?'★':String(o.ci+1),X+8,Y+13)}
  else if(o.type==='shelf'){R(X+1,Y+1,14,14,'#6b4423');R(X+2,Y+2,12,5,darken(o.t.color,1));R(X+2,Y+9,12,5,darken(o.t.color,.8));[3,6,9,12].forEach(i=>{R(X+i,Y+3,2,3,'#fff6');R(X+i,Y+10,2,3,'#fff6')});if(talkedOf(o.t.id)[0])R(X+7,Y+7,2,2,'#ffd84a')}
  else if(o.type==='album'){R(X+1,Y+4,14,10,'#7a5a3a');R(X+2,Y+3,12,8,'#e8453c');R(X+4,Y+5,8,4,'#ffd84a');R(X+7,Y+1+Math.round(Math.sin(tNow*3)),2,2,'#fff')}
  else if(o.type==='counter'){R(X,Y+4,16,12,'#7a4a24');R(X,Y+4,16,3,'#a46a36');if((o.x+o.y)%2)R(X+4,Y+1,6,4,'#fff')}
  else if(o.type==='chest'){const open=save.cave;R(X+1,Y+6,14,9,'#8a5226');R(X+1,Y+(open?3:6),14,open?3:2,'#a46a36');R(X+7,Y+8,2,3,'#ffd84a');if(!open&&Math.sin(tNow*4)>0.5)R(X+12,Y+3,2,2,'#fff')}
  else if(o.type==='crystal'){const c=['#5ad6ff','#a78bfa','#ff7ac7'][(o.x+o.y)%3];R(X+6,Y+3,4,11,c);R(X+4,Y+8,3,6,c);R(X+10,Y+7,3,7,c);R(X+7,Y+4,1,4,'#fff')}
}
function draw(dt){
  ctx.fillStyle='#111';ctx.fillRect(0,0,VW,VH);
  if(scene==='world'){
    drawWorld(dt);fx('draw',ctx);fx('drawWeather',ctx);
    // luzes das janelas à noite
    const ox=camX(),oy=camY(),lights=[];
    buildings.forEach(b=>{const X=b.x*T-ox,Y=b.y*T-oy;lights.push({x:X+16,y:Y+45,r:save.done[b.id]?22:14},{x:X+b.w*T-16,y:Y+45,r:save.done[b.id]?22:14})});
    fx('drawAtmosphere',ctx,lights);
    if(mode!=='trans')drawMinimap();
  }else{drawRoom();fx('draw',ctx)}
}
let last=performance.now();
function loop(now){
  const dt=Math.min(0.05,(now-last)/1000);last=now;
  try{update(dt);draw(dt)}catch(e){console.error(e)}
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
window.__game={P,buildings,save,get mode(){return mode},dbg:{enterRoom,makeRoom,makeCave,makeRevision,startBattle}};
})();
