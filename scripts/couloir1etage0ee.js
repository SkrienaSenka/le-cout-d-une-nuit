document.addEventListener("click", detectClick)
document.querySelector('#closeButton').addEventListener('click', ()=>{
    document.querySelector('#imgContainer').classList.add('hidden');
});

function detectClick(event){
    console.log(event.clientX + " " + event.clientY)
    console.log(event.clientX/window.innerWidth + " " + event.clientY/window.innerHeight)
    if (event.clientX/window.innerWidth > 0.57 && event.clientX/window.innerWidth < 0.66){
        if (event.clientY/window.innerHeight > 0.35 && event.clientY/window.innerHeight < 0.57)
            window.location = "couloir1etage0.html"
    }
    else if (event.clientX/window.innerWidth > 0.82 && event.clientX/window.innerWidth < 0.87) {
        if (event.clientY / window.innerHeight > 0.57 && event.clientY / window.innerHeight < 0.63){
            document.querySelector('#imgContainer').classList.remove('hidden');
        }
    }

}