const itemBox = document.querySelector('.item-box');

function addNewItembox() {
let newItemBox = document.createElement('div');
newItemBox.classList.add('item-box')
itemBox.after(newItemBox)
}
const button = document.querySelector('.button');
button.addEventListener('click', addNewItembox) 

