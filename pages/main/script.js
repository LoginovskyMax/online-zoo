let activeHeader = document.querySelectorAll('.active');
let activeFooter = document.querySelectorAll('.active_footer');

activeHeader[0].classList.add('focused')
activeHeader.forEach(item=>{
    item.addEventListener("click",()=>{
        activeHeader.forEach(item2=>{
            item2.classList.remove("focused")
        })
        item.classList.toggle('focused')
    })
})

activeFooter[0].classList.add('focused')
activeFooter.forEach(item=>{
    item.addEventListener("click",()=>{
        activeFooter.forEach(item2=>{
            item2.classList.remove("focused")
        })
        item.classList.toggle('focused')
    })
})
