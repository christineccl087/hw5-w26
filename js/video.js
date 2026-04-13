var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.getElementById("player1");

	video.autoplay = false;
	console.log("Auto play is set to False");
	video.loop = false;
	console.log("Loop is set to False")
	video.volume = 1;
	document.getElementById("volume").innerHTML = "100%";

	document.getElementById("play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});

	document.getElementById("pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.getElementById("slower").addEventListener("click", function() {
		console.log("Slow Down");
		video.playbackRate = video.playbackRate * 0.9;
		console.log("Speed is " + video.playbackRate);
	});

	document.getElementById("faster").addEventListener("click", function() {
		console.log("Speed Up");
		video.playbackRate = video.playbackRate / 0.9;
		console.log("Speed is " + video.playbackRate);
	});

	document.getElementById("skip").addEventListener("click", function() {
		console.log("Skip Ahead");
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current location is " + video.currentTime);
	});

	document.getElementById("mute").addEventListener("click", function() {
		console.log("Mute/Unmute");

		if (video.muted == false) {
			video.muted = true;
			this.innerHTML = "Unmute";
		} else {
			video.muted = false;
			this.innerHTML = "Mute";
		}
	});

	document.getElementById("slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		document.getElementById("volume").innerHTML = this.value + "%";
		console.log("The current value is " + video.volume);
	});

	document.getElementById("vintage").addEventListener("click", function() {
		console.log("Old School Style");
		video.classList.add("oldSchool");
	});

	document.getElementById("orig").addEventListener("click", function() {
		console.log("Original Style");
		video.classList.remove("oldSchool");
	});
});
