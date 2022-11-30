// line 1, 2 and 3 use prompt as input to take in random integers

var num1 = parseInt(prompt('Enter the 1st number'));
var num2 = parseInt(prompt('Enter the 2nd number'));
var num3 = parseInt(prompt('Enter the 3rd number'));

/*
Through use of logical and comparison operators, i got the largest of the three input integers.
for three numbers i.e, one needs to compare each number with the other two, hence six probability
spaces. Each conditional statement compared one number with the other two thus making three conditional
statements. Each conditional statement output the largest number in comparison to the rest */

if (num1 > num2 && num1 > num3){
    alert('The largest number is:'+num1);
}
else if (num2 > num1 && num2 > num3){
    alert('The largest number is:'+num2);
}
else {
    alert('The largest number is:'+num3);
}