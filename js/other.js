function changeTextBox() {
    if (document.getElementById("cars").value === "other") {
        document.getElementById("tb").disabled = '';
        document.getElementById("tb").style.display = 'inline';
        console.log("if");
    } else {
        document.getElementById("tb").disabled = 'false';
        document.getElementById("tb").style.display = 'none';
        console.log("else");
    }
}