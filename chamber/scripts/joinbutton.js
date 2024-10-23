const navButton = document.querySelector('#join');
const navigation = document.querySelector('.hero');

navButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	navButton.classList.toggle('open');
});