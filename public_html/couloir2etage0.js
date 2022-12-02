document.addEventListener("click", detectClick)

function detectClick(event) {
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
    } else if (event.clientY/window.innerHeight > 0.41 && event.clientY/window.innerHeight < 0.53) {
        if (event.clientX/window.innerWidth > 0.53 && event.clientX/window.innerWidth < 0.57) {
            let res = prompt("Donnez le code pour accéder à l'étage !")
            if (res.toUpperCase() == "PEP") {
                let data = JSON.parse(localStorage.getItem("data"))
                console.log(data)
                data.Etage1_Acces = true
                localStorage.setItem("data", data)
            }
        }
    }
}