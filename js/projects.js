/* Counter for the scrolled rows */
var x = 0;
function myFunction() {
  document.getElementById("scrolledRows").innerHTML = x += 1;
}

/* Hovering the first project to red when moving the mouse over the project */
function mouseOver() {
  document.getElementById("firstScrollDiv").style.color = "red";
}

function mouseOut() {
  document.getElementById("firstScrollDiv").style.color = "black";
}

/* Alert is given when the page has been loaded */
function pageLoadedFunction() {
  var wellcomeMessage = "Wellcome to my Project page!" + "\r\n \r\n" +
      "Please don't hesitate to contact me if there is some project you want to talk about.";
  alert(wellcomeMessage);
}
