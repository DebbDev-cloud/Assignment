var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var answer = document.getElementById("answer");
 
document.getElementById("addition").addEventListener("click", function() {
    answer.value = parseInt(input1.value) + parseInt(input2.value);
});
document.getElementById("substract").addEventListener("click", function() {
    answer.value = parseInt(input1.value) - parseInt(input2.value);
});
document.getElementById("multiply").addEventListener("click", function() {
    answer.value = parseInt(input1.value) * parseInt(input2.value);
})
document.getElementById("division").addEventListener("click", function() {
    answer.value = parseInt(input1.value) / parseInt(input2.value);
})