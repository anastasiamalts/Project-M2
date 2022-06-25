
class ToDoList {
    constructor() {
        // this.taskArray = []
        this.itemBox = document.querySelector('.inside-to-do-list-box');
        this.button = document.querySelector('.button');
        this.textBox = document.querySelector('.item-box')
        this.order = 'desc'
        this.newItemBox = this.newItemBox
    }
    
    addNewItembox = (text) => {
        this.newItemBox = document.createElement('div');
        this.newItemBox.classList.add('item-box')
        // this.newItemBox.style.cursor('move')
        this.newItemBox.innerHTML = `
    <input type="text" class="item-box-text">
    `
        this.itemBox.append(this.newItemBox)
        this.addDeleteButton(this.newItemBox);
        this.newItemBox.querySelector('input').value = typeof (text) === 'object' ? '' : text;
    }

    addDeleteButton = () => {
        let newDeleteButton = document.createElement('img');
        newDeleteButton.src = `images /cancel_inactive.svg`;
        newDeleteButton.classList.add('delete-button');
        
        newDeleteButton.addEventListener('mouseover', (event) => {
            event.target.src = `images /cancel_active.svg`
        })
        newDeleteButton.addEventListener('mouseout', (event) => {
            event.target.src = `images /cancel_inactive.svg`
        })
        newDeleteButton.addEventListener('click', (event) => {
            let element = document.querySelectorAll('.item-box')
            if (element.length > 1) {
                event.target.parentElement.remove()
                }
            else  {
                document.querySelector('input').value = ''
            }
        })
        this.newItemBox.append(newDeleteButton);
    }

  
    sortOrder = () => {
        let taskArray = []
        let task = document.querySelectorAll('.item-box-text');
        task.forEach(element => {
            taskArray.push(element.value)
        });
        if (this.order === 'desc') {
            this.order = 'asc'

            taskArray.sort((a, b) => {
                if (a < b)
                    return -1
            })
        }

        else {
            this.order = 'desc'
            taskArray.sort((a, b) => {
                if (a > b)
                    return -1
            })
            
        }
        console.log(taskArray)
        this.addSortedItems(taskArray)
    }

    addSortedItems = (array) => {
        let item = document.querySelectorAll('.item-box')
        item.forEach((element) => {
            element.remove()
        })

        array.forEach((text) => {
            this.addNewItembox(text)

        })
        
    }
    sortButtonListeners = () => {
        let sortButton = document.querySelector('.sort-button');
        sortButton.addEventListener('click', this.sortOrder)
        sortButton.addEventListener('mouseover', (event) => {
            if (this.order === 'asc') {
                event.target.src = `images /sort_active_down.svg`
            }
            else (
                event.target.src = `images /sort_active_up.svg`
            )
        })
        sortButton.addEventListener('mouseout', (event) => {
            if (this.order === 'asc') {
                event.target.src = `images /sort_inactive_down.svg`
            }
            else (
                event.target.src = `images /sort_inactive_up.svg`
            )
        })
        
    }
    init() {
        this.addNewItembox('');
        this.button.addEventListener('click', this.addNewItembox);
        this.sortButtonListeners()    
    }
}


let list = new ToDoList();
list.init()
