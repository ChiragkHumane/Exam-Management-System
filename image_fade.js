const textOverlay = document.querySelector('.text-overlay');

textOverlay.addEventListener('mouseover', () => {
  textOverlay.style.opacity = 1;
});

textOverlay.addEventListener('mouseout', () => {
  textOverlay.style.opacity = 0;
});
