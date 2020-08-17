function factorial(n){
    fact = 1;
    for(var i = 1; i <= n; i++){
        fact = fact*i;
    }
    return fact;
}

var number = 5;
var result = factorial(number);
console.log(number, "factorial is: ", result);