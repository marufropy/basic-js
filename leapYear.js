function learYear(year){
    if (year%400 == 0){
        return true;
    }
    else if(year%100 == 0){
        return false;
    }
    else if(year%4 == 0){
        return true;
    }
    else{
        return false;
    }
}

var year = 2021;
var result = learYear(year);

if (result == true){
    console.log(year," is Lear Year");
}
else{
    console.log(year," is Not Leap Year");
}