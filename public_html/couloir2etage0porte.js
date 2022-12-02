document.addEventListener("click", detectClick)
document.querySelector('#closeButton').addEventListener('click', ()=>{
    document.querySelector('#imgContainer').classList.add('hidden');
});

function detectClick(event){
    console.log(event.clientX + " " + event.clientY)
    console.log(event.clientX/window.innerWidth + " " + event.clientY/window.innerHeight)
    if (event.clientX/window.innerWidth > 0.104 && event.clientX/window.innerWidth < 0.27){
        if (event.clientY/window.innerHeight > 0.40 && event.clientY/window.innerHeight < 0.73)
            window.location = "couloir2etage0.html"
    }
    else if (event.clientX/window.innerWidth > 0.70 && event.clientX/window.innerWidth < 0.75) {
        if (event.clientY / window.innerHeight > 0.44 && event.clientY / window.innerHeight < 0.50){
            document.querySelector('#imgContainer').classList.remove('hidden');
        }
    }
    if (event.clientX/window.innerWidth > 0.368 && event.clientX/window.innerWidth < 0.393){
        if (event.clientY/window.innerHeight > 0.418 && event.clientY/window.innerHeight < 0.476)
            window.location = "couloir1etage0ee.html"
    }

}