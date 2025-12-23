function bmiCalculator(weight, height) {
    var result = Math.round(weight / (height * height));
    return result;
}
var bmi = bmiCalculator(65, 1.8);
