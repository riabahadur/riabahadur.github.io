const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile');
function setMenu(open) {
  mobile?.classList.toggle('open', open);
  menu?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  if (menu) menu.textContent = open ? 'MENU −' : 'MENU +';
}
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
document.querySelectorAll('.mobile a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {setMenu(false); menu.focus();} });
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.excerpt').forEach(wrapper => {
  const video = wrapper.querySelector('video');
  const button = wrapper.querySelector('.video-toggle');
  const update = () => { if (button) {button.textContent = video.paused ? 'Play excerpt' : 'Pause excerpt'; button.setAttribute('aria-label', video.paused ? 'Play silent video excerpt' : 'Pause silent video excerpt');} };
  if (reducedMotion.matches) {video.autoplay = false; video.pause();}
  video.addEventListener('play', update); video.addEventListener('pause', update);
  button?.addEventListener('click', () => { if (video.paused) video.play().catch(update); else video.pause(); });
  reducedMotion.addEventListener('change', event => {if(event.matches) video.pause();});
  update();
});
document.querySelectorAll('.load-player').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.closest('.embed-player');
    const frame = document.createElement('iframe');
    frame.src = container.dataset.playerSrc;
    frame.title = container.dataset.playerTitle;
    frame.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
    frame.allowFullscreen = true;
    container.replaceChildren(frame);
  });
});
