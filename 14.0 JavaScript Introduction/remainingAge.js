function lifeInWeeks(age) {
    let remainingAge = 90 - age
    let days = remainingAge * 365
    let weeks = remainingAge * 52
    let months = remainingAge * 12
    console.log("You have " + days + " days, " + weeks + " weeks, and" + months + "months left.")
}
console.log(lifeInWeeks(20))