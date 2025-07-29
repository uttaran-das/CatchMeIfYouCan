document.addEventListener('DOMContentLoaded', () => {
  const deleteBtn = document.getElementById('deleteBtn');
  const customCursor = document.getElementById('customCursor');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  deleteBtn.addEventListener('mouseenter', () => {
    customCursor.classList.add('is-pushed');
  });

  deleteBtn.addEventListener('mouseleave', () => {
    customCursor.classList.remove('is-pushed');
  });
});