/* Resample the approved transparent source at the display's pixel density.
   Keep the original image in layout and as the fallback; never alter its bytes. */
(() => {
  'use strict';
  const image = document.querySelector('body[data-gn-site="portal"]>header .ginova-wordmark');
  if (!image) return;
  const frame = image.parentElement;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context || !('imageSmoothingQuality' in context)) return;
  canvas.className = 'gn-wordmark-smooth';
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {position:'absolute', pointerEvents:'none', display:'none'});
  frame.append(canvas);
  const originalOpacity = image.style.opacity;
  let pending = 0;
  function render() {
    pending = 0;
    if (!image.complete || !image.naturalWidth) return;
    const rect = image.getBoundingClientRect();
    const parent = frame.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    try {
      const density = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(rect.width * density));
      canvas.height = Math.max(1, Math.round(rect.height * density));
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      // Match the existing centered object-fit:cover crop and CSS frame exactly.
      const scale = Math.max(rect.width / image.naturalWidth, rect.height / image.naturalHeight);
      const width = rect.width / scale, height = rect.height / scale;
      context.drawImage(image, (image.naturalWidth-width)/2, (image.naturalHeight-height)/2,
        width, height, 0, 0, canvas.width, canvas.height);
      Object.assign(canvas.style, {left:(rect.left-parent.left)+'px', top:(rect.top-parent.top)+'px',
        width:rect.width+'px', height:rect.height+'px', display:'block'});
      image.style.opacity = '0';
    } catch (_) {
      canvas.style.display = 'none';
      image.style.opacity = originalOpacity;
    }
  }
  function schedule() { if (!pending) pending = requestAnimationFrame(render); }
  image.addEventListener('load', schedule);
  image.addEventListener('error', () => { canvas.style.display='none'; image.style.opacity=originalOpacity; });
  if (image.complete) schedule();
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(image);
  window.addEventListener('resize', schedule, {passive:true});
  function watchDensity() {
    const query = matchMedia('(resolution: '+(window.devicePixelRatio || 1)+'dppx)');
    query.addEventListener('change', () => { schedule(); watchDensity(); }, {once:true});
  }
  watchDensity();
})();
