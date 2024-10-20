const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
    image1.style.border = '3px solid red';
});
const button2 = document.getElementsByTagName("button")[1];
button2.addEventListener("click", () => {
    image2.style.border = '3px solid red';
});
const button3 = document.getElementsByClassName("button3")[0];
button3.addEventListener("click", () => {
    image3.style.border = '3px solid red';
});

image1.addEventListener("mouseover", () => {
    image1.style.transform = 'scale(1.1)';
});
image1.addEventListener("mouseout", () => {
    image1.style.transform = 'scale(1)';
});

image2.addEventListener("mouseover", () => {
    image2.style.transform = 'scale(1.1)';
});
image2.addEventListener("mouseout", () => {
    image2.style.transform = 'scale(1)';
});

image3.addEventListener("mouseover", () => {
    image3.style.transform = 'scale(1.1)';
});
image3.addEventListener("mouseout", () => {
    image3.style.transform = 'scale(1)';
});

