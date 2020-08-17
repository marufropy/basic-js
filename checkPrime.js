function checkPrime(n){
    for(var i = 2; i < (n/2); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

var num = 130;
var result = checkPrime(num);
if(result == true){
    console.log(num, "is Prime");
}
else{
    console.log(num, "is not Prime");
}