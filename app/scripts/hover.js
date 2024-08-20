const button = document.querySelector('#play');
const pic  = document.querySelector('#pic');

button.addEventListener('mouseover', () => {
	pic.src='./images/svg/play-circle-white.svg';
});
button.addEventListener('mouseout', () => {
	pic.src='./images/svg/play-circle-blue.svg';
})