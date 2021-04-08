const btn = document.querySelector('#btn-toggler');
const element = document.querySelector('.mobile-navbar');

btn.addEventListener('click', () => {
	element.classList.toggle('show');
});
