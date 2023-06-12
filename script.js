
const listContainer = document.getElementById('list-container');
const subBtn = document.getElementById('sub-btn');


subBtn.addEventListener('click', addTask);


function addTask() {
    let inputBox = document.getElementById('input-box');
    console.log(inputBox.value);
    if (inputBox === '') {
        alert('You must write something');
    }
    else {
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();

}

listContainer.addEventListener('click', (e) => {
    // console.log(listContainer)
    console.log(e.target.parentElement)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');

    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData();
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');

}

showTask()