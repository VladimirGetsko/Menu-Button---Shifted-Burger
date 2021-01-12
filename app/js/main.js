
const btn = document.querySelector('.shifted-burger');

btn.addEventListener('click', () => {
	btn.querySelectorAll('span').forEach(span => {
		span.classList.toggle('open')
	});
});