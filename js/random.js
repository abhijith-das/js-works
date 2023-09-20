alert("Guess a number(1-100)");
var guesses = [];
var ranNum = Math.floor(Math.random() * 100) + 1;
//console.log(ranNum);
var flag = false;
var attemptNo = 1
do {
    console.log(ranNum);
    var userNum = prompt("Attempt number: " + attemptNo + "\nEnter a number: ");
    guesses.push(userNum);
    var difference = userNum - ranNum;
    if (difference === 0) {
        alert("Congradulations....correct guess..")
        flag = true;
        break;
    } else if (difference > 0) {
        alert("Too high")
    } else {
        alert("Too low")
    }
    attemptNo++;

} while (flag === false)

document.write("Congradulations....correct guess..\n")
document.write("No of attempts = " + attemptNo + " \n");
document.write("Previous guesses are: \n")
guesses.forEach(element => {
    document.writeln(element + " \n ")
});