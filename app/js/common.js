$(function() {

	function playSounds(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if(!audio) return //stop audio from playing
		audio.currentTime = 0; //fewind from the 0
		audio.play();
		key.classList.add('plaing');
	}

	function removeTransition(e) {
			if (e.propertyName !== 'transform') return; //skip it if it is not transform
			this.classList.remove("plaing");
		}

		const keys = document.querySelectorAll('.key');
		keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	window.addEventListener('keydown', playSounds);

});
