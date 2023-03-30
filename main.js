var listField = document.getElementById("listField")
var listContainer = document.getElementById("list-container"); 


function addTask() {
    if (listField.value === '') {
        alert("Please enter a task");
    } else {
        var li = document.createElement("li");
        li.innerHTML = listField.value;
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML= "\u00d7"; 
        li.appendChild(span);
    }
    listField.value = "";
    storeTask()
}
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeTask()
    } else if (e.target.tagName === "SPAN") { 
        e.target.parentElement.remove();
        storeTask()
    }
}, false); 

function storeTask() {
    localStorage.setItem("tasks", listContainer.innerHTML );
}

function showTask(task) {
    listContainer.innerHTML = localStorage.getItem("tasks");
}; 
showTask(); 