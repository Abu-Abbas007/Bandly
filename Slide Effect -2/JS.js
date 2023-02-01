// const raidoBtn_Slide_2 = document.querySelectorAll('.r1_Slide_2');
// const slideImages_Slide_2 = document.querySelector('#Slide-Images_Slide_2');
// const slide_Image_Slide_2 = document.querySelectorAll('.Slide-Image_Slide_2')
// const main_Contanier_Slide_2 = document.querySelector('#main-contanier_Slide_2');
// const inputBtn_Slide_2 = document.querySelectorAll(".r_Slide_2");


// const raidoBtn_One_Slide_2 = raidoBtn_Slide_2[0];
// const raidoBtn_Two_Slide_2 = raidoBtn_Slide_2[1];
// const raidoBtn_Three_Slide_2 = raidoBtn_Slide_2[2];
// const raidoBtn_Four_Slide_2 = raidoBtn_Slide_2[3];

// let autoPlayStart_Slide_2 = setInterval(autoPlay_Slide_2,3000) ;

// inputBtn_Slide_2[0].checked = true;
// slide_Image_Slide_2[0].classList.replace('invisible_Slide_2','visible_Slide_2')

// let checkedBtn_Slide_2 = 0;

// function radioBtn_Action_Slide_2 (imgNum) {
//     if (imgNum == 0){
//         inputBtn_Slide_2[0].checked = true
//         checkedBtn_Slide_2= 0;
//     }

//     else if (imgNum == 1) {
//         inputBtn_Slide_2[1].checked = true
//         checkedBtn_Slide_2 = 1;
//     }

//     else if (imgNum == 2) {
//         inputBtn_Slide_2[2].checked = true
//         checkedBtn_Slide_2 = 2;
//     }

//     else if (imgNum == 3) {
//         inputBtn_Slide_2[3].checked = true
//         checkedBtn_Slide_2 = 3;
//     }

//     if (inputBtn_Slide_2[0].checked) {
//         raidoBtn_Slide_2[0].style.backgroundColor="rgba(255, 255, 255, 0)"
//         raidoBtn_Slide_2[1].style.backgroundColor=""
//         raidoBtn_Slide_2[2].style.backgroundColor=""
//         raidoBtn_Slide_2[3].style.backgroundColor=""

//         raidoBtn_Slide_2[0].style.borderColor="red"
//         raidoBtn_Slide_2[1].style.borderColor=""
//         raidoBtn_Slide_2[2].style.borderColor=""
//         raidoBtn_Slide_2[3].style.borderColor=""

//         slide_Image_Slide_2[0].classList.replace('invisible_Slide_2','visible_Slide_2')
//         slide_Image_Slide_2[1].classList.replace('visible_Slide_2','invisible_Slide_2')
//         slide_Image_Slide_2[2].classList.replace('visible_Slide_2','invisible_Slide_2')
//         slide_Image_Slide_2[3].classList.replace('visible_Slide_2','invisible_Slide_2')
//     }
    
//     else if (inputBtn_Slide_2[1].checked) {
//         raidoBtn_Slide_2[0].style.backgroundColor=""
//         raidoBtn_Slide_2[1].style.backgroundColor="rgba(255, 255, 255, 0)"
//         raidoBtn_Slide_2[2].style.backgroundColor=""
//         raidoBtn_Slide_2[3].style.backgroundColor=""

//         raidoBtn_Slide_2[0].style.borderColor=""
//         raidoBtn_Slide_2[1].style.borderColor="red"
//         raidoBtn_Slide_2[2].style.borderColor=""
//         raidoBtn_Slide_2[3].style.borderColor=""

//         slide_Image_Slide_2[0].classList.replace('visible_Slide_2','invisible_Slide_2')

//         slide_Image_Slide_2[1].classList.replace('invisible_Slide_2','visible_Slide_2')

//         slide_Image_Slide_2[2].classList.replace('visible_Slide_2','invisible_Slide_2')
//         slide_Image_Slide_2[3].classList.replace('visible_Slide_2','invisible_Slide_2')
//     }

//     else if (inputBtn_Slide_2[2].checked) {
//         raidoBtn_Slide_2[0].style.backgroundColor=""
//         raidoBtn_Slide_2[1].style.backgroundColor=""
//         raidoBtn_Slide_2[2].style.backgroundColor="rgba(255, 255, 255, 0)"
//         raidoBtn_Slide_2[3].style.backgroundColor=""

//         raidoBtn_Slide_2[0].style.borderColor=""
//         raidoBtn_Slide_2[1].style.borderColor=""
//         raidoBtn_Slide_2[2].style.borderColor="red"
//         raidoBtn_Slide_2[3].style.borderColor=""

//         slide_Image_Slide_2[0].classList.replace('visible_Slide_2','invisible_Slide_2')
//         slide_Image_Slide_2[1].classList.replace('visible_Slide_2','invisible_Slide_2')
        
//         slide_Image_Slide_2[2].classList.replace('invisible_Slide_2','visible_Slide_2')

//         slide_Image_Slide_2[3].classList.replace('visible_Slide_2','invisible_Slide_2')
//     }
    
//     else if (inputBtn_Slide_2[3].checked === true)  {
//         raidoBtn_Slide_2[0].style.backgroundColor=""
//         raidoBtn_Slide_2[1].style.backgroundColor=""
//         raidoBtn_Slide_2[2].style.backgroundColor=""
//         raidoBtn_Slide_2[3].style.backgroundColor="rgba(255, 255, 255, 0)"

//         raidoBtn_Slide_2[0].style.borderColor=""
//         raidoBtn_Slide_2[1].style.borderColor=""
//         raidoBtn_Slide_2[2].style.borderColor=""
//         raidoBtn_Slide_2[3].style.borderColor="red"

//         raidoBtn_Slide_2[0].style.borderWidth=""
//         raidoBtn_Slide_2[1].style.borderWidth=""
//         raidoBtn_Slide_2[2].style.borderWidth=""
//         raidoBtn_Slide_2[3].style.borderWidth="3px"

//         slide_Image_Slide_2[0].classList.replace('visible_Slide_2','invisible_Slide_2')
//         slide_Image_Slide_2[1].classList.replace('visible_Slide_2','invisible_Slide_2')
//         slide_Image_Slide_2[2].classList.replace('visible_Slide_2','invisible_Slide_2')
    
//         slide_Image_Slide_2[3].classList.replace('invisible_Slide_2','visible_Slide_2')
//     }

//     clearInterval(autoPlayStart_Slide_2);
//     setTimeout(autoPlayRestart_Slide_2(),1000);
// }

// function autoPlayRestart_Slide_2 () {
//    autoPlayStart_Slide_2 = setInterval(autoPlay_Slide_2,3000);
// }

// function autoPlay_Slide_2 () {
//     if (checkedBtn_Slide_2 > 3) {checkedBtn_Slide_2 = 0};
//     radioBtn_Action_Slide_2(checkedBtn_Slide_2)
//     checkedBtn_Slide_2++;
// }


// raidoBtn_One_Slide_2.addEventListener('click',radioBtn_Action_Slide_2.bind(this,0));
// raidoBtn_Two_Slide_2.addEventListener('click',radioBtn_Action_Slide_2.bind(this,1));
// raidoBtn_Three_Slide_2.addEventListener('click',radioBtn_Action_Slide_2.bind(this,2));
// raidoBtn_Four_Slide_2.addEventListener('click',radioBtn_Action_Slide_2.bind(this,3));
