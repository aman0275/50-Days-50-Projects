const panels = document.querySelectorAll('.panel');
// it can select anything paragraph id h1 class without all it gonna select first one put all panel in node list

panels.forEach((panel) => {
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}