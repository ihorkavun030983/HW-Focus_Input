const input = document.querySelector('input');
const div = document.createElement('div');
div.textContent = 'Фокус в дії';
input.addEventListener('focus', () => {
  document.body.appendChild(div);
});
input.addEventListener('blur', () => {
    document.body.removeChild(div);})
