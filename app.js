const btns = document.querySelectorAll('.button')
const value = document.querySelector('.main-title')
let count = parseInt(localStorage.getItem('sayi')) || 0;


btns.forEach((btn) => {
  value.textContent = count;
  if (count > 0) {
    value.style.color = '#222';
  }
  if (count === 0) {
    value.style.color = '#1da1f2';
  }
  if (count < 0) {
    value.style.color = 'red';
  }
  btn.addEventListener('click', ((e) => {
    if (e.currentTarget.classList.contains('arti')) {
      count++;
      localStorage.setItem('sayi', count);
    } if (e.currentTarget.classList.contains('eksi')) {
      count--;
      localStorage.setItem('sayi', count);
    } if (e.currentTarget.classList.contains('sıfırla')) {
      count = 0;
      localStorage.setItem('sayi', count);
    }
    if (count > 0) {
      value.style.color = '#222';
    }
    if (count === 0) {
      value.style.color = '#1da1f2';
    }
    if (count < 0) {
      value.style.color = 'red';
    }

    value.textContent = count;
  }))
})
