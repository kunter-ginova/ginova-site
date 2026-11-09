/* Horizon arc: the light orb pauses when off-screen, in hidden tabs and for reduced motion.
   Footer music: Kunter's own tracks, a small list. Nothing loads or plays until the visitor opens the list and picks a track. */
(()=>{const svg=document.querySelector('.gw-limb');if(!svg||!svg.pauseAnimations)return;
const A='/assets/evolution-20261105/audio/';
const TRACKS=[['Quindici','quindici',227],['Dove Sei, Papà','dove-sei-papa',291],['Un Bacio a Pozzuoli','un-bacio-a-pozzuoli',232],['Sangue Azzurro','sangue-azzurro',162],['Campi Flegrei','campi-flegrei',357],['Regina del Golfo','regina-del-golfo',206],['La Trattoria di Ischia','la-trattoria-di-ischia',246],['End of the Century','end-of-the-century',213]];
const rm=matchMedia('(prefers-reduced-motion: reduce)');let seen=true;
const apply=()=>{(seen&&!document.hidden&&!rm.matches)?svg.unpauseAnimations():svg.pauseAnimations()};
if('IntersectionObserver'in window)new IntersectionObserver(e=>{seen=e[0].isIntersecting;apply()}).observe(svg);
document.addEventListener('visibilitychange',apply);rm.addEventListener?.('change',apply);apply();
const btn=document.querySelector('.gw-snd'),base=document.querySelector('.gw-base');if(!btn||!base)return;
const mmss=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
const panel=document.createElement('div');panel.className='gw-tracks';panel.id='gw-tracks';panel.hidden=true;panel.setAttribute('role','group');panel.setAttribute('aria-label','Music');
const sw=document.createElement('button');sw.type='button';sw.className='gw-trk gw-trk-sw';sw.setAttribute('aria-pressed','false');sw.innerHTML='<span class="gw-trk-dot" aria-hidden="true"></span><span class="gw-trk-t">Gate tones</span><span class="gw-trk-d">Off</span>';panel.append(sw);
const rows=TRACKS.map(([t,f,d],i)=>{const b=document.createElement('button');b.type='button';b.className='gw-trk';b.innerHTML='<span class="gw-trk-dot" aria-hidden="true"></span><span class="gw-trk-t"></span><span class="gw-trk-d"></span>';
 b.querySelector('.gw-trk-t').textContent=t;b.querySelector('.gw-trk-d').textContent=mmss(d);b.dataset.i=i;panel.append(b);return b});
base.append(panel);btn.setAttribute('aria-haspopup','true');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls','gw-tracks');btn.setAttribute('aria-label','Music');
let audio=null,cur=-1,open=false;
const mark=()=>{const playing=!!audio&&!audio.paused;btn.setAttribute('aria-pressed',String(playing));rows.forEach((r,i)=>{r.classList.toggle('is-on',i===cur);r.setAttribute('aria-pressed',String(i===cur&&playing))})};
function play(i){if(!audio){audio=new Audio();audio.preload='none';audio.volume=.5;audio.addEventListener('ended',()=>play((cur+1)%TRACKS.length));audio.addEventListener('pause',mark);audio.addEventListener('play',mark)}
 if(i===cur){audio.paused?audio.play().catch(mark):audio.pause();return}
 cur=i;audio.src=A+TRACKS[i][1]+'.mp3';audio.play().catch(mark);mark()}
const setOpen=v=>{open=v;panel.hidden=!v;btn.setAttribute('aria-expanded',String(v))};
btn.addEventListener('click',()=>setOpen(!open));
panel.addEventListener('click',e=>{const r=e.target.closest('.gw-trk[data-i]');if(r)play(+r.dataset.i)});
document.addEventListener('pointerdown',e=>{if(open&&!panel.contains(e.target)&&!btn.contains(e.target))setOpen(false)});
document.addEventListener('keydown',e=>{if(open&&e.key==='Escape'){setOpen(false);btn.focus()}});

/* Gate tones: three notes of one chord (D major), so any combination sounds consonant. Played on a click only, and only when switched on above. */
let ac=null,tonesOn=false;try{tonesOn=localStorage.getItem('gn-tones')==='1'}catch(e){}
const paintSw=()=>{sw.setAttribute('aria-pressed',String(tonesOn));sw.querySelector('.gw-trk-d').textContent=tonesOn?'On':'Off'};paintSw();
function ctx(){ac=ac||new(window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();return ac}
function voice(c,out,t,type,f0,f1,peak,att,dec,lp){const o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(f0,t);if(f1!==f0)o.frequency.exponentialRampToValueAtTime(f1,t+Math.min(dec,.6));
 g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(peak,t+att);g.gain.exponentialRampToValueAtTime(.0001,t+dec);
 let n=o;if(lp){const f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=lp;o.connect(f);n=f}n.connect(g).connect(out);o.start(t);o.stop(t+dec+.05)}
const TONE={
 engineering(c,out,t,v){voice(c,out,t,'sine',73.42,73.42,.5*v,.04,1.9,900);voice(c,out,t,'triangle',146.83,146.83,.22*v,.05,1.5,1200);voice(c,out,t,'sawtooth',73.42,73.42,.05*v,.08,1.1,420)},
 decision(c,out,t,v){[[220,.3],[440,.12],[660,.07],[880,.035]].forEach(([f,p],i)=>voice(c,out,t,'sine',f,f,p*v,.006,2.2-i*.35))},
 soundlab(c,out,t,v){voice(c,out,t,'sine',587.33,739.99,.2*v,.18,1.7);voice(c,out,t,'sine',1479.98,1479.98,.05*v,.3,1.4);voice(c,out,t,'triangle',739.99,739.99,.06*v,.25,1.5,2400)}};
function tone(key){if(!tonesOn)return;const c=ctx(),out=c.createGain();out.gain.value=.55;out.connect(c.destination);const t=c.currentTime+.02;
 if(key==='all'){['engineering','decision','soundlab'].forEach((k,i)=>TONE[k](c,out,t+i*.09,.7))}else if(TONE[key])TONE[key](c,out,t,1)}
sw.addEventListener('click',()=>{tonesOn=!tonesOn;try{localStorage.setItem('gn-tones',tonesOn?'1':'0')}catch(e){}paintSw();if(tonesOn){ctx();tone('decision')}});
document.addEventListener('click',e=>{const g=e.target.closest('[data-select],[data-quick]');if(g){tone(g.dataset.select||g.dataset.quick);return}if(e.target.closest('#reset'))tone('all')},true);

})();
