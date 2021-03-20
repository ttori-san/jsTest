'use strict'//必須

//表示を変えたい場所の定義
const modal = document.getElementById('modal');
const show = document.getElementById('modal__show');//button部分
const close = document.getElementById('modal__close');
const background = document.getElementById('modal__background');

show.addEventListener('click', () =>{
  modal.classList.add('is-show');
  background.classList.add('is-show');
})
close.addEventListener('click',() => {
  modal.classList.remove('is-show');
  background.classList.remove('is-show');
})
background.addEventListener('click', () =>{
  close.click();
})

