function a(){
function squareNumber(num) {
    var squaredNumber = num * num;
    alert('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}
var a=document.getElementById("number").value;
squareNumber(a);
}



function b(){
function halfNumber(num) {
    var halfNumber = num / 2;
    alert('Half of ' + num + ' is ' +  halfNumber);
    return halfNumber;
}

var b=document.getElementById("number_h").value;
halfNumber(b);

}


function c(){
function areaOfCircle(radius) {
    var area = Math.PI * (radius*radius);
    alert('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}

var c=document.getElementById("number_a").value;
areaOfCircle(c);
}



function d(){
function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    alert(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}
var d=document.getElementById("number_d").value;
var e=document.getElementById("number_e").value;
percentOf(d, e);

}

function f(){
function runAll(num) {
	function squareNumber(num) {
    var squaredNumber = num * num;
    alert('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}
function halfNumber(num) {
    var halfNumber = num / 2;
    alert('Half of ' + num + ' is ' +  halfNumber);
    return halfNumber;
}
function areaOfCircle(radius) {
    var area = Math.PI * (radius*radius);
    alert('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}
function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    alert(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}
d
    var half    = halfNumber(num);
    var squared = squareNumber(num);
    var area    = areaOfCircle(num);
    var result  = percentOf(squared, area);
}

var f=document.getElementById("number_f").value;
runAll(f);
}