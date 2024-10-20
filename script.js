const image = document.getElementById("img1");
const button = document.getElementById("button1");
const colors = ['red', 'green', 'blue', 'purple', 'orange'];

button.addEventListener("click", () => {

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    image.style.borderColor = randomColor;
})