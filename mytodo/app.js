document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector("#addTaskButton");
    let ul = document.querySelector("#taskList");
    let input = document.querySelector("#taskInput");

    btn.addEventListener("click", function () {

        if (input.value.trim() === "") return;

        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let span = document.createElement("span");
        span.textContent = input.value;

        let delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.classList.add("delete");

        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed");
        });

        delBtn.addEventListener("click", function () {
            li.remove();
        });

        li.append(checkbox, span, delBtn);
        ul.appendChild(li);

        input.value = "";
    });
});
