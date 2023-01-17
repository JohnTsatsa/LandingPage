left=document.querySelector(".left")
right=document.querySelector(".right")
container=document.querySelector(".container")

// when mouse enter to the left adds a class
left.addEventListener("mouseenter",function(){
	container.classList.add("hoverLeft")
})
// when mouse enter to the left removes a class
left.addEventListener("mouseleave",function(){
	container.classList.remove("hoverLeft")
})


// when mouse enter to the right adds a class
right.addEventListener("mouseenter",function(){
	container.classList.add("hoverRight")
})
// when mouse enter to the right rmoves a class
right.addEventListener("mouseleave",function(){
	container.classList.remove("hoverRight")
})