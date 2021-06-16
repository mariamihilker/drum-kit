// get all buttons as an array
let buttonsAll = document.querySelectorAll("button");

for(let i = 0; i < buttonsAll.length; i++) {
	buttonsAll[i].addEventListener("click", function(e) {
	console.log("clicked" + " " + e.target.value);
	playSound(e.target.value)
})
}

document.addEventListener('keydown', logKey);

function logKey(e) {
  playSound(e.key)
}


// Call this function when clickiing buttons
// Depends which button is clicked will be chosen different sound
function playSound(button) {
	let audioFile = new Audio('sounds/'+ button + '.mp3')
	audioFile.play();
}