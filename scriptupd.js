// const itemBox = document.querySelector('.inside-to-do-list-box');
// const textBox = document.querySelector('.item-box')
// let order = 'desc';

// class ToDoList {
//     contructor() {
//         this.itemBox = document.querySelector('.inside-to-do-list-box');
//         this.textBox = document.querySelector('.item-box')
//         let addNewItembox = () => {
//             let newItemBox = document.createElement('div');
//             this.newItemBox.classList.add('item-box')
//             this.newItemBox.innerHTML = `
//     <input type="text" class="item-box-text">
//     `
//             itemBox.append(newItemBox)
//         }

//         let addDeleteButton = () => {
//             let newDeleteButton = document.createElement('img');
//             this.newDeleteButton.src = `images /cancel_inactive.svg`;
//             this.newDeleteButton.classList.add('delete-button');
//         }

//         let addDeleteButtonListeners = () => {
//             this.newDeleteButton.addEventListener('mouseover', (event) => {
//                 event.target.src = `images /cancel_active.svg`
//             })
//             this.newDeleteButton.addEventListener('mouseout', (event) => {
//                 event.target.src = `images /cancel_inactive.svg`
//             })
//             this.newDeleteButton.addEventListener('click', () => {
//                 newItemBox.remove()
//             })
//         }
//         let sortOrder = () => {
//             let taskArray = []
//             let task = document.querySelectorAll('input');
//             task.forEach(element => {
//                 taskArray.push(element.value)
//             });
//             if (order === 'desc') {
//                 order = 'asc'

//                 taskArray.sort((a, b) => {
//                     if (a < b)
//                         return -1
//                 })
//             }

//             else {
//                 order = 'desc'
//                 taskArray.sort((a, b) => {
//                     if (a > b)
//                         return -1
//                 })
//             }
//             let  addSortedItems = (array) => {
//                 item = document.querySelectorAll('.item-box')
//                 item.forEach((element) => {
//                     element.remove()
//                 })

//                 array.forEach((text) => {
//                     this.addNewItembox(text)

//                 })
//             }
//             let sortButtonListeners = () => {
//                 let sortButton = document.querySelector('.sort-button');
//                 sortButton.addEventListener('click', sortOrder)
//                 sortButton.addEventListener('mouseover', (event) => {
//                     if (order === 'asc') {
//                         event.target.src = `images /sort_active_down.svg`
//                     }
//                     else (
//                         event.target.src = `images /sort_active_up.svg`
//                     )
//                 })
//                 sortButton.addEventListener('mouseout', (event) => {
//                     if (order === 'asc') {
//                         event.target.src = `images /sort_inactive_down.svg`
//                     }
//                     else (
//                         event.target.src = `images /sort_inactive_up.svg`
//                     )
//                 })
//             }
//             let init = () => {
//                 this.addNewItembox()

//                 //вешаем обработчик на добавить 
//                 //вешаем обработчик на сортировку
//             }
//         }
//     }
// }
// let list = new ToDoList();
// list.init()
