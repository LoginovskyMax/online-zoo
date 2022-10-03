let activeHeader = document.querySelectorAll('.active');
let activeFooter = document.querySelectorAll('.active_footer');
let donateRadio = document.querySelectorAll('.donate_radio')
let sumText = document.querySelectorAll('.sum_text')
let inpNumber = document.querySelector('.number')

activeHeader[3].classList.add('focused')
activeHeader.forEach(item=>{
    item.addEventListener("click",()=>{
        activeHeader.forEach(item2=>{
            item2.classList.remove("focused")
        })
        item.classList.toggle('focused')
    })
})
activeFooter[3].classList.add('focused')
activeFooter.forEach(item=>{
    item.addEventListener("click",()=>{
        activeFooter.forEach(item2=>{
            item2.classList.remove("focused")
        })
        item.classList.toggle('focused')
    })
})

sumText[2].style.color='#FE9013';
donateRadio.forEach((item,index)=>{
    item.addEventListener('change',()=>{
        sumText.forEach(sum=>{
            sum.style.color = '#333B41'
        })
        sumText[index].style.color='#FE9013';
        inpNumber.value = item.value
    })
})


inpNumber.addEventListener('input',(event)=>{
    if(inpNumber.value.length>4){
        inpNumber.value = inpNumber.value.slice(0,4)
    }
    donateRadio.forEach((item,index)=>{
        if(item.value==inpNumber.value){
            item.checked=true;
            sumText.forEach(item=>item.style.color='#333B41')
            sumText[index].style.color='#FE9013';
        }
    })
})

let media = window.matchMedia('(min-width:320px) and (max-width:999px)')
let media2 = window.matchMedia('(min-width:1000px) and (max-width:1600px)')
if(media.matches){
    sumText[5].style.color='#FE9013';
    donateRadio[5].checked=true
}
if(media2.matches){
    sumText[2].style.color='#FE9013';
    donateRadio[2].checked=true
}
window.addEventListener('resize',()=>{
    if(media.matches){
        sumText[5].style.color='#FE9013';
        donateRadio[5].checked=true
    }
    if(media2.matches){
        sumText.forEach(item=>item.style.color='#333B41')
        sumText[2].style.color='#FE9013';
        donateRadio[2].checked=true
    }
})