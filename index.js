// alert("wording")
let buttonsAll = document.querySelectorAll("button");

document.querySelector("button")

for(let i = 0; i < buttonsAll.length; i++) {
	buttonsAll[i].addEventListener("click", function() {
	console.log("clicked" + " " + i);
})
}