function inchToFeet(inches){
    var feet = Math.floor(inches/12);
    var inch = inches%12;

    return [feet, inch]
}

var amount = 60;
var result = inchToFeet(amount);

console.log(amount, "inches: ", result[0], "feet", result[1], "inches");