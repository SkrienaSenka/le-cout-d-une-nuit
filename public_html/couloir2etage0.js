document.addEventListener("click", detectClick)

function detectClick(event){
    console.log(event.clientX + " " + event.clientY)
    console.log(event.clientX/window.innerWidth + " " + event.clientY/window.innerHeight)
    if (event.clientY/window.innerHeight > 0.37 && event.clientY/window.innerHeight < 0.605){
        if (event.clientX/window.innerWidth > 0.387 && event.clientX/window.innerWidth < 0.41){
            window.location = "couloir2etage0porte.html"
        }
    }
    if (event.clientY/window.innerHeight > 0.53 && event.clientY/window.innerHeight < 0.56){
        if (event.clientX/window.innerWidth > 0.825 && event.clientX/window.innerWidth < 0.94){
            window.location = "couloir1etage0.html"
        }
    }
}