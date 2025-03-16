'use strict'

//constantes y variales

const imgList = document.querySelectorAll(`.img`);
const lightbox = document.querySelector(`.lightbox`);
const grande = document.querySelector(`.grande`);
const closeBtn = document.querySelector(`.close`);

//Definir funciones
const closeBtnHandler = () => lightbox.classList.remove(`isActive`);
const imgListHandler = index => {


    lightbox.classList.add(`isActive`);
    grande.src = imgList[index].src

}

//cuando hago CLICK en .img
   // .lightbox se le ADD la clase .isActive
   // .grande añadirle el archivo SRC de la .img

imgList.forEach((eachImg, index)=>{
    imgList[index].addEventListener(`click`,()=>{
    
        imgListHandler(index)
        
    })
})


// Cuando hago click en .close 
   // .ligthbox se le REMOVE la clase .isActive

   closeBtn.addEventListener(`pointerdown`, closeBtnHandler)
