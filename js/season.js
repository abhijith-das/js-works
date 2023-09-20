//accept month from user

let monthNo = prompt("Enetr the month(1-12): ");

//variable assignment
let season;
let seasonColor;

//conditional statement

switch (monthNo) {
    case "1":
    case "2":
    case "3":
        season = "Spring";
        seasonColor = "lightgreen";
        break;
    case "4":
    case "5":
    case "6":
        season = "Summer";
        seasonColor = "indianred";
        break;
    case "7":
    case "8":
    case "9":
        season = "Autumn";
        seasonColor = "lightyellow";
        break;
    case "10":
    case "11":
    case "12":
        season = "Winter";
        seasonColor = "lightblue";
        break;
    default:
        break;

}
document.write(season);
document.body.style.backgroundColor = seasonColor;

var num = prompt("Enter number: ");
var square = (i) => {
    return i * i;
}