//Boton que agrega la nueva tarea al div. Llama a la funcion 'newTaskSpace'.

function add() {
    let newTask = document.getElementById("usr-task").value;
    if (newTask == '') {
        return;
    }
    newTaskSpace(newTask);
    $('#usr-task').val('');
}

function newTaskSpace(data) {
    let toDoList = $('#to-do-list');
    toDoList.append(`<div class="task-container"><input type="checkbox" class="cboxtask" onclick="lineThroughTask(this)"><p>${data}</p><button onclick="deleteButtom(this)" class="deleteButtom">Delete task</button></div>`);
}

function deleteButtom(data) {
    let value = $(data).closest(".task-container");
    value.remove();
}

function lineThroughTask(data) {
    if($(data).is(':checked')){
        $(data).next().addClass('lineThrough');
    } else {
        $(data).next().removeClass('lineThrough');
    }
    console.log($(data).next());
}


