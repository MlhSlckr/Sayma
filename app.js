const btns = document.querySelectorAll('.button')
const value = document.querySelector('.main-title')
let count = 0;

btns.forEach((btn) => {

  btn.addEventListener('click', ((e) => {
    if (e.currentTarget.classList.contains('arti')) {
      count++;
    }
    if (e.currentTarget.classList.contains('eksi')) {
      count--;
    }
    if (e.currentTarget.classList.contains('sıfırla')) {
      count = 0;
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
    localStorage.setItem('sayi', count)
  }))
})

if (localStorage.sayi) {
  value.textContent = localStorage.sayi;
  count = localStorage.sayi

  if (count > 0) {
    value.style.color = '#222';
  }
  if (count === 0) {
    value.style.color = '#1da1f2';
  }
  if (count < 0) {
    value.style.color = 'red';
  }
}
