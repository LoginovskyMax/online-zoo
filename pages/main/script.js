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

let carusel = document.querySelector('.testimonials_wrap_container')
let thumb = document.querySelector('.range')
let media = window.matchMedia('(min-width:320px) and (max-width:999px)')
let media2 = window.matchMedia('(min-width:1000px) and (max-width:1400px)')
let media3 = window.matchMedia('(min-width:640px) and (max-width:800px)')
let media4 = window.matchMedia('(min-width:1400px) and (max-width:1600px)')

if(media2.matches){
    thumb.setAttribute('max', 8)
}
thumb.addEventListener('change',()=>{
    let width = 292;
    if(media2.matches){
        width = 322;
    }
    let newWidth = width*thumb.value
    carusel.style.transform = `translateX(-${newWidth}px)`;
})

let testimons = document.querySelectorAll('.border')
let nextBtn = document.querySelector('.right')
let prevBtn = document.querySelector('.left')
let conteiner = document.querySelector('.conteiner')
let interval = true
const blocksArr = [
    {id:1,mainSrc:'../../assets/images/Rectangle 5.png',iconSrc:'../../assets/icons/banana-bamboo_icon.png',firstText:'giant Pandas',secondText:'Native to Southwest China'},
    {id:2,mainSrc:'../../assets/images/Rectangle 6.png',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'Eagles',secondText:'Native to South America'},
    {id:3,mainSrc:'../../assets/images/Rectangle 7.png',iconSrc:'../../assets/icons/banana-bamboo_icon.png',firstText:'Gorillas',secondText:'Native to Congo'},
    {id:4,mainSrc:'../../assets/images/Rectangle 9.png',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'cheetahs',secondText:'Native to Africa'},
    {id:5,mainSrc:'../../assets/images/Rectangle 10.png',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'Penguins',secondText:'Native to Antarctica'},
    {id:6,mainSrc:'../../assets/images/Rectangle 8.png',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'Two-toed Sloth',secondText:'Mesoamerica, South America'},
    {id:7,mainSrc:'../../assets/images/Rectangle 11.png',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'Alligators',secondText:'Native to Southeastern U. S.'},
    {id:8,mainSrc:'../../assets/images/anakonda.jpg',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'Snakes',secondText:'Native to South America'},
    {id:9,mainSrc:'../../assets/images/spider.jpg',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'Spiders',secondText:'Native to Congo'},
    {id:10,mainSrc:'../../assets/images/Manul.jpg',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'Manul',secondText:'Native to Ural'},
    {id:10,mainSrc:'../../assets/images/slon.jpg',iconSrc:'../../assets/icons/banana-bamboo_icon.png',firstText:'Elephant',secondText:'Native to Afrika'},
    {id:11,mainSrc:'../../assets/images/bear.jfif',iconSrc:'../../assets/icons/meet-fish_icon.png',firstText:'Bear',secondText:'Native to Russia'},
    {id:12,mainSrc:'../../assets/images/horse.jpg',iconSrc:'../../assets/icons/banana-bamboo_icon.png',firstText:'Horse',secondText:'Native to Kazakhstan'},
]
function createBlock(prev){
    let newDiv = document.createElement('div')
    newDiv.classList.add('foto_list','wrapper')
    let arr = [];
    while(arr.length<=5){
        let randomIndex = Math.floor(Math.random()*blocksArr.length)
        if(arr.indexOf(blocksArr[randomIndex])==-1){
            arr.push(blocksArr[randomIndex])
        }
    }
    arr.forEach(item=>{
        let listContainer = document.createElement('div');
        let listItem = document.createElement('div');
        let animal = document.createElement('img');
        let hidden = document.createElement('div');
        let hiddenText = document.createElement('div');
        let foodIcon = document.createElement('img');
        let firstText = document.createElement('p');
        let secondText = document.createElement('p');
        secondText.textContent=item.secondText
        firstText.textContent = item.firstText
        hiddenText.append(firstText,secondText)
        foodIcon.src = item.iconSrc
        hidden.classList.add('hidden')
        hidden.append(hiddenText,foodIcon)
        animal.src = item.mainSrc
        animal.classList.add('animal')
        listItem.classList.add('foto_list_item')
        listItem.append(animal,hidden)
        listContainer.classList.add('list_container')
        listContainer.append(listItem)
        newDiv.append(listContainer)
    })
    if(prev){
        conteiner.prepend(newDiv)
    }else{conteiner.append(newDiv)}
}
let scrollWidth = document.documentElement.clientWidth 

if(media4.matches){
    scrollWidth = scrollWidth -400
}
nextBtn.addEventListener('click',()=>{
    if(interval){
        interval=false
        createBlock()
        let mainDiv = document.querySelectorAll('.foto_list')
        mainDiv[1].style.transform = `translateX(${scrollWidth}px)`
        mainDiv[0].style.transform = `translateX(-${scrollWidth}px)`
        setTimeout(()=>{mainDiv[1].style.transform = `translateX(0px)`},1)
        setTimeout(()=>{mainDiv[0].remove();
        interval=true},1000)
    }
   
})
prevBtn.addEventListener('click',()=>{
    if(interval){
        interval=false
        createBlock(true)
        let mainDiv = document.querySelectorAll('.foto_list')
        mainDiv[1].style.transform = `translateX(${scrollWidth}px)`
        mainDiv[0].style.transform = `translateX(-${scrollWidth}px)`
        setTimeout(()=>{mainDiv[0].style.transform = `translateX(0px)`},1)
        setTimeout(()=>{mainDiv[1].remove();
        interval=true;},1000)
    }
})

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
    activeHeader[7].classList.add('focused')
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

let testimonials = document.querySelectorAll('.container_item');
let mainTestim = document.querySelector('.pop_up')
let closeBtn2
let clone

if(media.matches || media3.matches){
    testimonials.forEach(item=>{
            item.addEventListener('click',()=>{
                    if(interval){
                    interval=false
                    clone = item.cloneNode(true);
                    closeBtn2 = document.createElement('button')
                    closeBtn2.classList.add('close_btn2')
                    closeBtn2.textContent = 'X'
                    clone.append(closeBtn2)
                    clone.style.width = '268px';
                    clone.childNodes[1].style.width = '264px'
                    clone.childNodes[1].childNodes[3].style.width = '230px'
                    mainTestim.prepend(clone)
                    mainTestim.style.display = 'flex'
                    mainTestim.style.opacity = '1'
                    clone.addEventListener('click',(e)=>{
                        e.stopPropagation()
                    })
                    closeBtn2.addEventListener('click',()=>{
                        if(interval){
                        interval=false
                        mainTestim.style.opacity = '0'
                        clone.style.height = '0px';
                        setTimeout(()=>{  
                            mainTestim.style.display = 'none'
                          
                            clone.remove()
                            interval=true
                        },800)
                    }
                    })
                    setTimeout(()=>{  
                        clone.style.height = '391px';
                        clone.childNodes[1].style.height = '387px'
                        clone.childNodes[1].childNodes[3].style.height = '320px'
                        clone.childNodes[1].childNodes[3].style.overflow = 'scroll'
                    },1)
                    setTimeout(()=>{  
                       interval = true
                    },800)
                }
            })
    })
  
    mainTestim.addEventListener('click',()=>{
        if(interval){
            interval=false
        mainTestim.style.opacity = '0'
        clone.style.height = '0px';
        setTimeout(()=>{  
            mainTestim.style.display = 'none'
            clone.remove()
            interval=true
        },800)
    }
    })
}

let burgerIcon = document.querySelector('.burger_menu')
let burgerAnimo = document.querySelector('.logo_animo')
burgerIcon.addEventListener('mouseenter',()=>{
    
    burgerAnimo.classList.toggle('animate')
   
})
burgerIcon.addEventListener('mouseleave',()=>{
   
    burgerAnimo.classList.toggle('animate')
    
})


