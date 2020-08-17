function fibonacci(n){
    if(n == -1){
        return 0;
    }
    else if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

var num = 10;
var result = fibonacci(num - 1);
console.log(num, "th fibonacci number is: ", result);