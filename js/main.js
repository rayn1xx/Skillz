// js/main.js
console.log("fn.rateYo на старте main.js =", $.fn.rateYo);

$(function() {
  $("#rateYo").rateYo({
    rating:     3.5,
    starWidth:  "24px",
    ratedFill:  "#f1c40f",
    normalFill: "#ccc",
    halfStar:   true
  });
});