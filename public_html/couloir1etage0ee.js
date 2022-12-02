alert("Cette page est un easter egg !")


document.addEventListener("click", detectClick)

function detectClick(event){
    console.log(event.clientX + " " + event.clientY)
    console.log(event.clientX/window.innerWidth + " " + event.clientY/window.innerHeight)
    if (event.clientY/window.innerHeight > 0.187 && event.clientY/window.innerHeight < 0.678){
        if (event.clientX/window.innerWidth > 0.80 && event.clientX/window.innerWidth < 0.95){
            window.location = "couloir2etage0porte.html"
        }
    }

}