const input = document.querySelector("input");
const addBtn = document.querySelector(".btn");
const card = document.querySelector(".card");

addBtn.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskcard");

    taskDiv.innerHTML = `
        <div class="content row">
            <p class="col-md-6">${taskText}</p>
            <div class="icons col-md-6">
                <span><i class="fa-solid fa-circle-check check"></i></span>
                <span><i class="fa-solid fa-palette color"></i></span>
                <span><i class="fa-solid fa-trash-can trash"></i></span>
            </div>
        </div>
    `;

    card.appendChild(taskDiv);

//امسح اللى جوا ال input
    input.value = "";

    //اجيب الelements اللى جو ال taskDiv
    const checkBtn = taskDiv.querySelector(".check");
    const deleteBtn = taskDiv.querySelector(".trash");
    const colorBtn = taskDiv.querySelector(".color");
    const text = taskDiv.querySelector("p");

//check
    checkBtn.addEventListener("click", function () {
        text.classList.toggle("completed");
    });

    // delete
    deleteBtn.addEventListener("click", function () {
        taskDiv.remove();
    });

    // color
    colorBtn.addEventListener("click", function () {
        const colors = ["#ff7675", "#74b9ff", "#55efc4", "#ffeaa7", "#a29bfe" , "#ee427e", "#e17055", "#00b894" , "#c9aa47", "#336fc9"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        taskDiv.style.backgroundColor = randomColor;
    });
});
