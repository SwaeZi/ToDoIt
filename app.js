let taskStore = document.getElementById("nextTask");
let bTask = document.getElementById("buttonTask");
let outputTask = document.getElementById("output");







bTask.onclick = function apendTask() {
          let div = document.createElement('div');
          let taskData = taskStore.value;
          outputTask.innerHTML = taskData;
        if (!taskData.length) {
          alert ("add a new task")
        } else {
          div.id = "newTask";
          div.className = "form-control";
          div.style.backgroundColor = "black";
          div.innerHTML = taskData;
          document
            .getElementsByClassName("form-floating mb-3")[0]
            .appendChild(div);
        }
};