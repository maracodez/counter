document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const plusButton = document.getElementById('plus');
  const minusButton = document.getElementById('minus');

  let count = 0;

  plusButton.addEventListener('click', () => {
    count++;
    counter.textContent = count
  });
  minusButton.addEventListener('click', () => {
   if (count > 0) {
    count--;
    counter.textContent = count
   } 
  })
})