let navImage = document.querySelector('#nav-icon');
let list = document.querySelector('ul');
function click(){
    list.classList.toggle("appear");}
navImage.addEventListener('click',click);