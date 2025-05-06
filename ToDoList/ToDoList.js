document.getElementById("addTask").addEventListener("click", function() {
    // Get the value from the input field
    let taskList = document.getElementById("taskList");
    let userInput = document.getElementById("task").value.trim();

    if (userInput) { // Ensure the input is not empty
        let newTask = document.createElement('p');
        newTask.textContent = userInput;

        // Add a click event listener to delete the task when clicked
        newTask.addEventListener("click", function() {
            taskList.removeChild(newTask);
        });

        taskList.appendChild(newTask);
        document.getElementById("task").value = "";
    }
});