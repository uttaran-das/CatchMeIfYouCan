document.addEventListener('DOMContentLoaded', () => {
  const deleteBtn = document.getElementById('deleteBtn');
  const customCursor = document.getElementById('customCursor');

  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    customCursor.style.left = `${clientX}px`;
    customCursor.style.top = `${clientY}px`;
  });

  deleteBtn.addEventListener('mouseenter', (e) => {
    const btnRect = deleteBtn.getBoundingClientRect();
    const cursorRect = customCursor.getBoundingClientRect();

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const cursorCenterX = cursorRect.left + cursorRect.width / 2;
    const cursorCenterY = cursorRect.top + cursorRect.height / 2;

    const deltaX = cursorCenterX - btnCenterX;
    const deltaY = cursorCenterY - btnCenterY;

    const moveDistance = 100; // Distance to move the cursor away
    const moveX = (deltaX / Math.abs(deltaX || 1)) * moveDistance;
    const moveY = (deltaY / Math.abs(deltaY || 1)) * moveDistance;

    customCursor.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  deleteBtn.addEventListener('mouseleave', () => {
    customCursor.style.transform = 'translate(0, 0)';
  });
});