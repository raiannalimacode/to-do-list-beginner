const input = document.querySelector(".input-task");
const button = document.querySelector(".button-add-task");
const ulList = document.querySelector(".list-tasks");


let myList = []; 

button.addEventListener('click', () => {
    if (input.value != "") {
        myList.push({
            task: input.value,
            complete: false
        })
        input.value = '';
        showTasks()
    } else {
        alert("Empy field.")
    }
})

const showTasks = () => {
    let newLi = ''
    myList.forEach((item, index) => {
        newLi = newLi + `
        <li class="task ${item.complete && "done"}">
            <div class="task-box">
                <img src="./assets/check.png" alt="Check task." onClick="completeTask(${index})">
                <p>
                    ${item.task}
                </p>
            </div>
            <img src="./assets/trash.png" alt="Trash task." onClick="deleteItem(${index})">
        </li>
        `
    })
    ulList.innerHTML = newLi;

    localStorage.setItem('list', JSON.stringify(myList))
}

const deleteItem = (index) => {
    myList.splice(index, 1);
    showTasks();
}

const completeTask = (index) => {
    myList[index].complete = !myList[index].complete;
    showTasks();
}

const rechargeTasks = () => {
    const tasksLocalStorage = localStorage.getItem('list');

    if (tasksLocalStorage) {
        myList = JSON.parse(tasksLocalStorage);
    }
    showTasks();
}

rechargeTasks();

