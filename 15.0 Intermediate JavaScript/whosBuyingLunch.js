let names = ["angela", "namit", "michael", "nina"]
function whosPaying(names) {
    let total = names.length;
    let ran = Math.floor(Math.random() * total);
    let randomPerson = names[ran];

    return randomPerson + " is going to buy lunch today!";
}