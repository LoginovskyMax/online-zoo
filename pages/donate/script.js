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
inpNumber.value = 100
activeFooter.forEach(item=>{
    item.addEventListener("click",()=>{
        activeFooter.forEach(item2=>{
            item2.classList.remove("focused")
        })
        item.classList.toggle('focused')
    })
})

donateRadio.forEach((item,index)=>{
    item.addEventListener('change',()=>{
        inpNumber.focus()
        sumText.forEach(sum=>{
            sum.style.color = '#333B41'
        })
        sumText[index].style.color='#FE9013';
        inpNumber.value = item.value
    })
})

inpNumber.focus()
inpNumber.addEventListener('input',(event)=>{
    if(inpNumber.value.length>4){
        inpNumber.value = inpNumber.value.slice(0,4)
    }
    donateRadio.forEach((item,index)=>{
        if(item.value==inpNumber.value){
            item.checked=true;
            sumText.forEach(item=>item.style.color='#333B41')
            sumText[index].style.color='#FE9013';
        }else{
            sumText.forEach(item=>item.style.color='#333B41')
            item.checked=false;
        }
    })
})

sumText[5].style.color='#FE9013';
donateRadio[5].checked=true

let closeBtn = document.querySelector('.close_btn')
let hideMenu = document.querySelector('.hidden_menu')
let burger = document.querySelector('.burger_menu')
let menuList = document.querySelector('.hidden_menu_list')
closeBtn.addEventListener('click',()=>{
    hideMenu.style.opacity = 0;
    menuList.style.height = '0px';
    setTimeout(()=>{  
        hideMenu.style.display = 'none'
    },900)
})
burger.addEventListener('click',()=>{
    activeHeader[10].classList.add('focused')
    hideMenu.style.display = 'flex';
    hideMenu.style.opacity = 1;
    setTimeout(()=>{  
    menuList.style.height = '329px';
},100)
})
menuList.addEventListener('click',(e)=>{
    e.stopPropagation()
})
hideMenu.addEventListener('click',()=>{
    hideMenu.style.opacity = 0;
    menuList.style.height = '0px';
    setTimeout(()=>{  
        hideMenu.style.display = 'none'
    },700)
})

