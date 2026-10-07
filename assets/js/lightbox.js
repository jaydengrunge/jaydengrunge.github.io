// Minimal lightbox: click a photo to view full size; arrows/Esc to navigate.
(function () {
  const links = Array.from(document.querySelectorAll('.lightbox-link'));
  if (!links.length) return;

  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML =
    '<button class="lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-prev" aria-label="Previous">&#8249;</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button class="lb-next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(box);

  const img = box.querySelector('img');
  const cap = box.querySelector('figcaption');
  let i = 0;

  function show(n) {
    i = (n + links.length) % links.length;
    img.src = links[i].href;
    cap.textContent = links[i].dataset.caption || '';
    box.classList.add('open');
  }
  const close = () => box.classList.remove('open');

  links.forEach((a, n) => a.addEventListener('click', e => { e.preventDefault(); show(n); }));
  box.querySelector('.lb-close').onclick = close;
  box.querySelector('.lb-prev').onclick = e => { e.stopPropagation(); show(i - 1); };
  box.querySelector('.lb-next').onclick = e => { e.stopPropagation(); show(i + 1); };
  box.addEventListener('click', e => { if (e.target === box) close(); });
  document.addEventListener('keydown', e => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();
