var num1 = parseInt(prompt('Enter the 1st number'));
var num2 = parseInt(prompt('Enter the 2nd number'));
var num3 = parseInt(prompt('Enter the 3rd number'));

if (num1 > num2 && num1 > num3){
    alert('The largest number is:'+num1);
}
else if (num2 > num1 && num2 > num3){
    alert('The largest number is:'+num2);
}
else {
    alert('The largest number is:'+num3);
}