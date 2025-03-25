// home section start
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
// home section end

// sproduct section start
var MainImg = document.getElementById("Mainimg");
var smallimg = document.getElementsByClassName("small-img")


smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}
// sproduct section end

// Newsletter section start
function showAlert() {
    let emailInput = document.getElementById("email");
    if (emailInput.value) {
        alert("Thank you for signing up! We'll keep you updated.");
        emailInput.value = ""; // Clears the input field
    } else {
        alert("Please enter your email address.");
    }
}
// Newsletter section end