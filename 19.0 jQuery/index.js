/*
$(document).keypress(function (event) {
    $("h1").text(event.key)
});
*/
$("h1").text("Harshith")
$("h1").addClass("big-title")

// button to perform fade animation
$(".dis").on("click", function () {
    $("h1").fadeToggle();
});

// button to change the color of h1
$(".col").on("click", function () {
    $("h1").addClass("changeColor");
});

// button to return the earlier color of h1
$(".rcol").on("click", function () {
    $("h1").removeClass("changeColor");
});

// button to return the earlier color of h1
$(".bgChange").on("click", function () {
    $("h1").toggleClass("bg");
});