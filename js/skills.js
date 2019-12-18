
/* The page is initialized with four skills */
/* New skills and related pictures can be inserted in the page */
/* The inserted skills are not stored in any database etc in order that they would sustain when the page is refreshed */

/* New skills and the link to related picture is set to the "skills" object */
/* The html link is created with the help of the inserted link */

var firstSkill = {
  description:"Blockchain Technology",
  linkToPicture:"https://cdn.pixabay.com/photo/2018/03/31/05/07/blockchain-3277336_960_720.png",
  get linkAsHtml() {
    return "<img id=" +'"myImg"' + ' src="' + this.linkToPicture + '" width="84" height="58">';
  }
}
var secondSkill = {
  description:"Teaching and Mentoring",
  linkToPicture:"https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_960_720.jpg",
  get linkAsHtml() {
    return "<img id=" +'"myImg"' + ' src="' + this.linkToPicture + '" width="84" height="58">';
  }
}
var thirdSkill = {
  description:"Ethereum Technology",
  linkToPicture:"https://cdn.pixabay.com/photo/2017/06/30/15/36/ethereum-2458552_960_720.png",
  get linkAsHtml() {
    return "<img id=" +'"myImg"' + ' src="' + this.linkToPicture + '" width="84" height="58">';
  }
}

var fourthSkill = {
  description:"Project Management",
  linkToPicture:"https://cdn.pixabay.com/photo/2017/02/13/02/17/project-management-2061635_960_720.jpg",
  get linkAsHtml() {
    return "<img id=" +'"myImg"' + ' src="' + this.linkToPicture + '" width="84" height="58">';
  }
}

initFirstTableRowsFunction(fourthSkill);
initFirstTableRowsFunction(thirdSkill);
initFirstTableRowsFunction(secondSkill);
initFirstTableRowsFunction(firstSkill);


function initFirstTableRowsFunction(newSkill) {

  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = newSkill.description;
  cell2.innerHTML = newSkill.linkAsHtml;
}

/* New skills and the related picture is inserted in the text fields in the page */
/* The inserted data skill and link are set to "skills" object and the corresponding html link to picture is created */
/* The new skill row is inserted as a first row in the table  */
function tableInsertNewRowFunction() {
  var newSkill = {
    description: document.getElementById("mySkill").value,
    linkToPicture: document.getElementById("relatedPicture").value,
    get linkAsHtml() {
      return "<img id=" +'"myImg"' + ' src="' + this.linkToPicture + '" width="84" height="58">';
    }
  }

  /* New row node is created for the table */
  /* New cell nodes are created for the row node */
  /* The values from the "skills" object are inserted to cells */
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = newSkill.description;
  cell2.innerHTML = newSkill.linkAsHtml;
}

/* Last row/skill can be removed from the table */
function tableRowDeleteFunction() {
  document.getElementById("myTable").deleteRow(-1);
}
