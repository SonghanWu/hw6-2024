var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	video.loop = false;
	console.log("Autoplay is set " + video.autoplay);
	console.log("Looping is set " + video.loop);
});

const playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
    video.play(); // Play the video
	console.log("Play Video");
    // console.log(`Volume: ${video.volume}`);

	let videoVolume = volumeSlider.value; // set the initial volume value
	volumeSpan.textContent = `${videoVolume}%`; // show the initial volume value
});

const pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click', function() {
    video.pause(); // Pause the video
	console.log("Pause Video");
});

const slowButton = document.querySelector('#slower');
slowButton.addEventListener('click', function() {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log('Speed is ' + (video.playbackRate * 100).toFixed(2) + '%');
});

const fastButton = document.querySelector('#faster');
fastButton.addEventListener('click', function() {
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log('Speed is ' + (video.playbackRate * 100).toFixed(2) + '%');
});

const skipButton = document.querySelector('#skip');
skipButton.addEventListener('click', function() {
	var newTime = video.currentTime + 10;
	if (newTime < video.duration) {
		video.currentTime = newTime;
	} else {
		video.currentTime = 0;
	}
	console.log('Current Time: ' + video.currentTime + ' seconds');
});

const muteButton = document.querySelector('#mute');
muteButton.addEventListener('click', function() {
	video.muted = !video.muted;
	muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
	console.log(video.muted ? 'Mute' : 'Unmute'); // to represent the curretn status
});

const volumeSlider = document.querySelector('#slider');
const volumeSpan = document.querySelector('#volume');
// or... we dnon't need this here? yes!
// let videoVolume = volumeSlider.value; // set the initial volume value
// volumeSpan.textContent = `${videoVolume}%`; // show the initial volume value
volumeSlider.addEventListener('input', function() {
	video.volume = volumeSlider.value / 100;
	videoVolume = volumeSlider.value;
	volumeSpan.textContent = `${videoVolume}%`;
	console.log('Volume: ' + videoVolume + '%'); // Update the volume information for debug purpose
});

const oldSchoolButton = document.querySelector('#vintage');
oldSchoolButton.addEventListener('click', function() {
	video.classList.add('oldSchool');
});

const originalButton = document.querySelector('#orig');
originalButton.addEventListener('click', function() {
	video.classList.remove('oldSchool');
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
