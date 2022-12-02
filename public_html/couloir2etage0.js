document.addEventListener("click", detectClick)

function detectClick(event){
    console.log(event.clientX + " " + event.clientY)
    console.log(event.clientX/window.innerWidth + " " + event.clientY/window.innerHeight)
    if (event.clientY/window.innerHeight > 0.485 && event.clientY/window.innerHeight < 0.507){
        if (event.clientX/window.innerWidth > 0.45 && event.clientX/window.innerWidth < 0.51){
            window.location = "couloir2etage0.html"
        }
    }

}