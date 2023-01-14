var buttons = document.querySelectorAll("[data-target]");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var targetClass = this.getAttribute("data-target");
        var target = document.querySelector(targetClass);
        var currentY = window.pageYOffset;
        var targetY = target.offsetTop;
        var step = (targetY - currentY) / 100;
        var intervalId = setInterval(function() {
            if (currentY < targetY) {
                currentY += step;
                window.scrollTo(0, currentY);
            } else {
                clearInterval(intervalId);
            }
        }, 5);
    });
}

/* Dit script is geschreven met behulp van ChatGPT
















/* function scrollToButton() {
    var aboutme = document.querySelector(".aboutme");
    var currentY = window.pageYOffset;
    var targetY = aboutme.offsetTop;
    var step = (targetY - currentY) / 100;
    var intervalId = setInterval(function() {
        if (currentY < targetY) {
            currentY += step;
            window.scrollTo(0, currentY);
        } else {
            clearInterval(intervalId);
        }
    }, 0.01);
} */

/* unction scrollToButton() {
    var aboutme = document.querySelector(".aboutme");
    aboutme.scrollIntoView();
    console.log("hoi");
}

var button = document.querySelector("header>nav>ul>li:nth-of-type(3)>button");
button.addEventListener("click", scrollToButton); */