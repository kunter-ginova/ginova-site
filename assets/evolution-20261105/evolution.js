/* Preview review helpers only: ?gn-demo=decision opens a field, ?gn-still=1 skips the opening. */
(()=>{const q=new URLSearchParams(location.search),still=q.get('gn-still')||q.get('gn-demo')||q.get('gn-scroll');
addEventListener('load',()=>{if(still)document.getElementById('skip-opening')?.click();if(q.get('gn-scroll'))setTimeout(()=>document.querySelector('.gn-links')?.scrollIntoView({behavior:'instant'}),700);const d=q.get('gn-demo');if(d)setTimeout(()=>document.querySelector('[data-select="'+d+'"]')?.click(),500);});})();
