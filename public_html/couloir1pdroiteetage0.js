document.addEventListener("click", detectClick)
document.querySelector('#closeButton').addEventListener('click', ()=>{
    document.querySelector('#imgContainer').classList.add('hidden');
});

function detectClick(event){
    console.log(event.clientX + " " + event.clientY)
    console.log(event.clientX/window.innerWidth + " " + event.clientY/window.innerHeight)
    if (event.clientX/window.innerWidth > 0.21 && event.clientX/window.innerWidth < 0.34){
        if (event.clientY/window.innerHeight > 0.32 && event.clientY/window.innerHeight < 0.647)
            window.location = "couloir1etage0.html"
    }
    else if (event.clientX/window.innerWidth > 0.738 && event.clientX/window.innerWidth < 0.90) {
        if (event.clientY / window.innerHeight > 0.23 && event.clientY / window.innerHeight < 0.622){
            document.querySelector('#imgContainer').classList.remove('hidden');
        }
    }

}