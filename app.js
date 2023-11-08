let titleStore = document.getElementById("titleTask");
let contentStore = document.getElementById("contentTask");
let bTask = document.getElementById("buttonTask");
let outputTask = document.getElementById("output");
const container = document.getElementsByClassName("form-floating mb-3");



function uniqueDiv() {
  let div = document.createElement('div')

}

function addTask() {
          let taskContainer = document.createElement('div')
          let divTitle = document.createElement('h3')
          let divTask = document.createElement('div');
          let titleData = titleStore.value;
          let contentData = contentStore.value;
          let delButton = document.createElement('button');

        if (!titleData.length || !contentData.length) {
          alert ("Hmm why so empty?");
        } else {
          delButton.className = "btn btn-danger";
          delButton.textContent = "Delete"
          taskContainer.id = "task";
          divTitle.id = "titleTask";
          divTask.id = "contentTask"
          divTask.className = "form-control";
          divTask.style.backgroundColor = "white";
          divTitle.style.backgroundColor= "white";
          divTask.innerHTML = contentData;
          divTitle.innerHTML = titleData;
          container[0].appendChild(taskContainer);
          taskContainer.appendChild(divTitle);
          taskContainer.appendChild(divTask);
          taskContainer.appendChild(delButton);
        }
};

function deleteButton() {
      let mainContainer = document.getElementById("task")
      mainContainer.remove()
}