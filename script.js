const itemBox = document.querySelector('.inside-to-do-list-box');
const textBox = document.querySelector('.item-box')
let order = 'desc';

// добавляем новую ячейку
function addNewItembox(text) {
    let newItemBox = document.createElement('div');
    newItemBox.classList.add('item-box')
    newItemBox.innerHTML = `
<input type="text" class="item-box-text">
`
    itemBox.append(newItemBox)
    addDeleteButton(newItemBox);
    newItemBox.querySelector('input').value = typeof (text) === 'object' ? '' : text;
}


function addDeleteButton(newItemBox) {
    let newDeleteButton = document.createElement('img');
    newDeleteButton.src = `images /cancel_inactive.svg`;
    newDeleteButton.classList.add('delete-button');

    newDeleteButton.addEventListener('mouseover', (event) => {
        event.target.src = `images /cancel_active.svg`
    })
    newDeleteButton.addEventListener('mouseout', (event) => {
        event.target.src = `images /cancel_inactive.svg`
    })
    newDeleteButton.addEventListener('click', () => {
        if (document.querySelectorAll('input').length > 1) {
            newItemBox.remove()
        }
        else {
            newItemBox.querySelector('input').value = ''
        }
    })
    newItemBox.append(newDeleteButton);
}

const button = document.querySelector('.button');
button.addEventListener('click', addNewItembox)


//сортировка
function sortOrder() {
    let taskArray = []
    let task = document.querySelectorAll('input');
    task.forEach(element => {
        taskArray.push(element.value)
    });
    if (order === 'desc') {
        order = 'asc'

        taskArray.sort((a, b) => {
            if (a < b)
                return -1
        })
    }

    else {
        order = 'desc'
        taskArray.sort((a, b) => {
            if (a > b)
                return -1
        })

    }
    //сохранять как было отсортировано 
    // создать переменную, которая будет хранить состояние сортировки 
    //если в этой перменной ask, сортируем в состояние desk
    console.log(taskArray)
    addSortedItems(taskArray)
}

function addSortedItems(array) {
    item = document.querySelectorAll('.item-box')
    item.forEach((element) => {
        element.remove()
    })

    array.forEach((text) => {
        addNewItembox(text)

    })
}
function sortButtonListeners() {
    let sortButton = document.querySelector('.sort-button');
    sortButton.addEventListener('click', sortOrder)
    sortButton.addEventListener('mouseover', (event) => {
        if (order === 'asc') {
            event.target.src = `images /sort_active_down.svg`
        }
        else (
            event.target.src =  `images /sort_active_up.svg`
        )
    })
    sortButton.addEventListener('mouseout', (event) => {
        if (order === 'asc') {
            event.target.src =  `images /sort_inactive_up.svg`
        }
        else (
            event.target.src = `images /sort_inactive_down.svg`
        )
    })
}

// sortOrder() // вызывать при нажатии кнопки
sortButtonListeners()
addNewItembox('')

