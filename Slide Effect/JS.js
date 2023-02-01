const raidoBtn = document.querySelectorAll('.r1');
const slideImages = document.querySelector('#Slide-Images');
const slide_Image = document.querySelectorAll('.Slide-Image')
const main_Contanier = document.querySelector('#main-contanier');
const inputBtn = document.querySelectorAll(".r");


const raidoBtn_One = raidoBtn[0];
const raidoBtn_Two = raidoBtn[1];
const raidoBtn_Three = raidoBtn[2];
const raidoBtn_Four = raidoBtn[3];

let autoPlayStart = setInterval(autoPlay,3000) ;

inputBtn[0].checked = true;
slide_Image[0].classList.replace('invisible','visible')


function radioBtn_Action (imgNum) {
    if (imgNum == 0){
        inputBtn[0].checked = true
        checkedBtn = 0;
    }

    else if (imgNum == 1) {
        inputBtn[1].checked = true
        checkedBtn = 1;
    }

    else if (imgNum == 2) {
        inputBtn[2].checked = true
        checkedBtn = 2;
    }

    else if (imgNum == 3) {
        inputBtn[3].checked = true
        checkedBtn = 3;
    }

    if (inputBtn[0].checked) {
        raidoBtn[0].style.backgroundColor="rgba(255, 255, 255, 0)"
        raidoBtn[1].style.backgroundColor=""
        raidoBtn[2].style.backgroundColor=""
        raidoBtn[3].style.backgroundColor=""
        slide_Image[0].classList.replace('invisible','visible')
        slide_Image[1].classList.replace('visible','invisible')
        slide_Image[2].classList.replace('visible','invisible')
        slide_Image[3].classList.replace('visible','invisible')
    }
    
    else if (inputBtn[1].checked) {
        raidoBtn[0].style.backgroundColor=""
        raidoBtn[1].style.backgroundColor="rgba(255, 255, 255, 0)"
        raidoBtn[2].style.backgroundColor=""
        raidoBtn[3].style.backgroundColor=""
        slide_Image[0].classList.replace('visible','invisible')

        slide_Image[1].classList.replace('invisible','visible')

        slide_Image[2].classList.replace('visible','invisible')
        slide_Image[3].classList.replace('visible','invisible')
    }

    else if (inputBtn[2].checked) {
        raidoBtn[0].style.backgroundColor=""
        raidoBtn[1].style.backgroundColor=""
        raidoBtn[2].style.backgroundColor="rgba(255, 255, 255, 0)"
        raidoBtn[3].style.backgroundColor=""
        slide_Image[0].classList.replace('visible','invisible')
        slide_Image[1].classList.replace('visible','invisible')
        
        slide_Image[2].classList.replace('invisible','visible')

        slide_Image[3].classList.replace('visible','invisible')
    }
    
    else if (inputBtn[3].checked === true)  {
        raidoBtn[0].style.backgroundColor=""
        raidoBtn[1].style.backgroundColor=""
        raidoBtn[2].style.backgroundColor=""
        raidoBtn[3].style.backgroundColor="rgba(255, 255, 255, 0)"
        slide_Image[0].classList.replace('visible','invisible')
        slide_Image[1].classList.replace('visible','invisible')
        slide_Image[2].classList.replace('visible','invisible')
    
        slide_Image[3].classList.replace('invisible','visible')
    }

    clearInterval(autoPlayStart);
    setTimeout(autoPlayRestart(),1000);
}

function autoPlayRestart () {
   autoPlayStart = setInterval(autoPlay,3000);
}

let checkedBtn = 0;

function autoPlay () {
    if (checkedBtn > 3) {checkedBtn = 0};
    radioBtn_Action(checkedBtn)
    checkedBtn++;
}



raidoBtn_One.addEventListener('click',radioBtn_Action.bind(this,0));
raidoBtn_Two.addEventListener('click',radioBtn_Action.bind(this,1));
raidoBtn_Three.addEventListener('click',radioBtn_Action.bind(this,2));
raidoBtn_Four.addEventListener('click',radioBtn_Action.bind(this,3));
