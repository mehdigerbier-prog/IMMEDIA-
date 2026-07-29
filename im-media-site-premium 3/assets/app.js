const els=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
els.forEach(el=>io.observe(el));
const nums=document.querySelectorAll('[data-count]');
const nio=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting||e.target.dataset.done)return;e.target.dataset.done='1';const target=+e.target.dataset.count;const suffix=e.target.dataset.suffix||'';let start=0;const dur=1200,t0=performance.now();function tick(t){const p=Math.min((t-t0)/dur,1);const v=Math.floor(target*(1-Math.pow(1-p,3)));e.target.textContent=v.toLocaleString('fr-FR')+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}),{threshold:.7});nums.forEach(n=>nio.observe(n));
