
	var myOptions = {
		"nativeControlsForTouch": false,
		techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS","silverlightSS", "html5"],
		"logo": { "enabled": false },
		controls: true,
		autoplay: true,
		width: "640",
		height: "400",
		poster: ""
}

	
	 
myPlayer = amp("azuremediaplayer", myOptions);

myPlayer.src([
    { src: "http://mobicom.streaming.mediaservices.windows.net/900a3e1b-f403-4042-9c5d-c238049c9444/Best Places to Visit in Sri Lanka, GoPlaces Sri Lanka  8 Wonders.ism/manifest", type: "application/vnd.ms-sstr+xml", streamingFormats: ["SMOOTH", "HLS","HLS-V3", "HLS-V4"]}, 
]);
