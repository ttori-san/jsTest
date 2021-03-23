'use strict'

const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

tabLabels.forEach((selectedLabel)=>{
  selectedLabel.addEventListener('click',e=>{
    e.preventDefault();

    tabLabels.forEach(label=>{
      label.classList.remove('active');
    });
    selectedLabel.classList.add('active');
    
    tabContents.forEach(content=>{
      content.classList.remove('active');
    })
  
    document.getElementById(selectedLabel.dataset.id).classList.add('active');
  });
  
});