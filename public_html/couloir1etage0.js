document.addEventListener("click", detectClick)

function detectClick(event){
    console.log(event.clientX + " " + event.clientY)
    console.log(event.clientX/window.innerWidth + " " + event.clientY/window.innerHeight)
    if (event.clientY/window.innerHeight > 0.40 && event.clientY/window.innerHeight < 0.80){
        if (event.clientX/window.innerWidth > 0.34 && event.clientX/window.innerWidth < 0.395){
            window.location = "couloir1pgaucheetage0.html"
        }
        else if (event.clientX/window.innerWidth > 0.59 && event.clientX/window.innerWidth < 0.645){
            window.location = "couloir1pdroiteetage0.html"
        }
    }
    if (event.clientY/window.innerHeight > 0.485 && event.clientY/window.innerHeight < 0.507){
        if (event.clientX/window.innerWidth > 0.45 && event.clientX/window.innerWidth < 0.51){
            window.location = "couloir2etage0.html"
        }
    }

}

function initGame() {
    let data = localStorage.getItem("data");
    console.log('!!!!!!!')
    if (!data) {
        console.log('!!!!!!!')
        localStorage.setItem("data", JSON.stringify({EE_Etage0: false, Etage1_Acces: false, EE_Etage1: false}));
    }
}

initGame()