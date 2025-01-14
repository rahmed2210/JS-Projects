const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask() {
    if(inputBox.value === '') {
        alert('You must write something')
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = '',
    // to save new data in localstorage
    saveData()
}

//  To mark the tasks as completed or uncompleted
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    }  // Click on the cross icon to delete the task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)


// To Save to do list after refresh
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

// To display data when refresh data or open the app
function showTasks(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTasks()


// 
