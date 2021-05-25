//let volumeUp = document.getElementById("volumeUp")
let volumeChange = document.getElementById("volumeChange")
let songTitle = document.getElementById("songTitle")
let artist = document.getElementById("artist")
let playTrack = document.getElementById("play")
let albumImg = document.getElementById("album_img")
let slider = document.getElementById("slider")

let playing_songs = false
let mute=false
let timer =0 

//songs
let songs=[
	{
		"name":"Blank Space",
		"artist":"Taylor Swift",
		"path":"music_mp3/BlankSpace.mp3",
		"img":"music_img/blank.jpg"
	},
	{
		"name":"Cornelia Street",
		"artist":"Taylor Swift",
		"path":"music_mp3/CorneliaStreet.mp3",
		"img":"music_img/cor.jpg"
	},
	{
		"name":"Style",
		"artist":"Taylor Swift",
		"path":"music_mp3/Style.mp3",
		"img":"music_img/style.png"
	},
	{
		"name":"Cardigan",
		"artist":"Taylor Swift",
		"path":"music_mp3/Cardigan.mp3",
		"img":"music_img/cardigan.jpg"
	},
	{
		"name":"Wildest Dream",
		"artist":"Taylor Swift",
		"path":"music_mp3/WildestDream.mp3",
		"img":"music_img/wd.jpg"
	},
	{
		"name":"Love Story",
		"artist":"Taylor Swift",
		"path":"music_mp3/LoveStory.mp3",
		"img":"music_img/ls.jpg"
	}
];
//index
	
var index=0
for(let i=0;i<songs.length;i++){
		index=songs.length[i]
}
//functions
//load track
let track=document.createElement("audio")
function loadTrack(index){
	track.preload="none"
	track.src=songs[index].path
	artist.innerHTML=songs[index].artist
	songTitle.innerHTML=songs[index].name
	albumImg.src=songs[index].img
	console.log("Load song,image,artist,song name")
	timer=setInterval(rangeSlider,1000)

}
loadTrack(index)
//play the song
function playSong(){	
	track.play()
	playing_songs =true
	playTrack.innerHTML='<i class="fas fa-pause"></i>'
	console.log("Play the song")
}

//pause song
function pauseTrack(){
	track.pause()
	playing_songs=false
	playTrack.innerHTML='<i class="fas fa-play "></i>'
	console.log("Pause the song")
}

//check the playing
function justPlay(){
if(playing_songs===false){
	playSong()
		}
else{
	pauseTrack()
	}
}

//next song
function nextTrack(){
	if(index<songs.length-1){
		index+=1
		loadTrack(index)
		playSong()
	}
	else{
		index=0
		loadTrack(index)
		playSong()
	}
console.log("next track")
}
//pre
function preTrack(){
	if(index>0){
		index-=1
		loadTrack(index)
		playSong()
	}
	else{
		index=songs.length
		loadTrack(index)
		playSong()
	}
console.log("pre track")
}
//volume change
function volume_change(){
	track.volume=volumeChange.value/100
	console.log(track.volume)
}

function changeTrack(){
	let slider_position = track.duration * (slider.value/100)
	track.currentTime = slider_position
	console.log(slider_position)
}
function rangeSlider(){
	let position =0
	if(!isNaN(track.duration)){
		position = track.currentTime * (track.duration /100)
		document.getElementById("slider").value = position
	}
	if(track.ended){
		playTrack.innerHTML='<i class="fas fa-play "></i>'
	}
}
//mute
function volume_mute(){
	if(mute===false){
		volume_change()
		document.getElementById("volumeMute").innerHTML='<i class="fas fa-volume-up"></i>'
		mute=true
	}else{
	track.volume=0
	document.getElementById("volumeMute").innerHTML='<i class="fas fa-volume-mute"></i>'
	mute=false
}
}


