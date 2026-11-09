/* Corporate subsite: keeps the language across pages; names each stone of the arch; the star rises as the Constitution is read. */
(()=>{'use strict';const lang=document.documentElement.lang,vh=new URLSearchParams(location.search).get('vh');if(vh)document.documentElement.style.setProperty('--vh',vh+'px');
document.querySelectorAll('.co-lang a').forEach(a=>{if(a.dataset.setlang===lang)a.setAttribute('aria-current','true')});
document.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href');if(a.dataset.setlang||h.startsWith('//')||!/^(\/|[a-z-]+\/$)/.test(h))return;a.setAttribute('href',h+'?lang='+lang)});
const t=document.querySelector('[data-cap="t"]'),c=document.querySelector('[data-cap="s"]');
if(t){const t0=t.innerHTML,c0=c.innerHTML;
 const show=e=>{const d=e.currentTarget.dataset;t.textContent=lang==='tr'?d.tr:d.en;c.textContent=lang==='tr'?d.trs:d.ens};
 const hide=()=>{t.innerHTML=t0;c.innerHTML=c0};
 document.querySelectorAll('.stone').forEach(s=>{s.addEventListener('pointerenter',show);s.addEventListener('focus',show);s.addEventListener('pointerleave',hide);s.addEventListener('blur',hide)});}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelector('.tri-go')?.remove();
const doc=document.querySelector('.doc'),star=document.querySelector('.rail-star'),parts=[...document.querySelectorAll('.part')],links=[...document.querySelectorAll('.rail nav a')];
if(doc&&star){let raf=0;const tick=()=>{raf=0;const r=doc.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.5-r.top)/r.height));star.style.setProperty('--p',p.toFixed(4));
 let cur=parts[0];for(const s of parts)if(s.getBoundingClientRect().top<innerHeight*.5)cur=s;links.forEach(a=>a.classList.toggle('on',a.dataset.part===cur.dataset.part));};
 addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(tick)},{passive:true});addEventListener('resize',tick);tick();}
})();
