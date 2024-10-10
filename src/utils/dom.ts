
function removeScoll(e: TouchEvent): void {
  e.preventDefault();
}

export function disableScroll(): void {
  document.body.style.height = '100vh';
  document.body.style.overflow = 'hidden';
  document.addEventListener('touchmove', removeScoll, { passive: false });
}

export function enableScroll(): void {
  document.body.style.height = 'auto';
  document.body.style.overflow = 'auto';
  document.removeEventListener('touchmove', removeScoll);
}
