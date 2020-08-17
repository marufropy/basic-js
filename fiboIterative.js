function fibonacci(n){
    var fib1 = 0;
    var fib2 = 1;
    if(n == 1){
        return fib1;
    }
    else if(n == 2){
        return fib2;
    }
    else{
        var sum = 0;
        for(var i = 3; i <= n; i++){
            sum = fib1 + fib2;
            fib1 = fib2;
            fib2 = sum;
        }
        return sum;    
    }
}

var num = 10;
var result = fibonacci(num);
console.log(num, "th fibonacci number is: ", result);