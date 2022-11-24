
var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var addBtn = document.getElementById("addBtn");

var tableBody = document.getElementById("tableBody");



var bookMarks;
if (localStorage.getItem("bookMarks" == null)) {
    bookMarks = [];
}
else {
    bookMarks = JSON.parse(localStorage.getItem("bookMarks"));
    displayBookMarker();
}

addBtn.onclick = function () {
    var bookMark = {
        name: nameInput.value,
        url: urlInput.value
    }
    bookMarks.push(bookMark);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
    displayBookMarker();
    clearData();
}



// function visitPage() {
//     window.location = 'http://www.google.com';
// }



// visitPage.onclick = function visitPage() {

//     var visit={

//     }
//     window.location = 'http://www.google.com';
// }
// document.getElementById("visitPage").innerHTML=


function displayBookMarker() {
    var marks = ``;
    for (var i = 0; i < bookMarks.length; i++) {
        marks += `
              <tr>
                  <td>${bookMarks[i].name}</td>
                  <td><a href="${bookMarks[i].url},visitPage()><button class="btn btn-primary" id="visitPage">Visit</button></a> </td>
                  <td><button onclick="deletedBookMarker(${i})" class="btn btn-danger">Delete</button></td>
               </tr>
        `
    }
    document.getElementById('tableBody').innerHTML = marks;
}


function deletedBookMarker(i) {
    bookMarks.splice(i, 1);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
    displayBookMarker();
}



function clearData() {
    nameInput.value = "";
    urlInput.value = "";

}


var regexName = /^[A-Za-z_]{1,}$/

function nameValedation() {
    if (regexName.test(nameInput.value)) {
        return true;
    }
    else {
        return false;
    }
}


var regexUrl = /^(https:\/\/)?(www\.)?[A-Za-z0-9]{1,}\.[a-z]{2,}$/

function urlValedation() {
    if (regexUrl.test(urlInput.value)) {
        return true;
    }
    else {
        return false;
    }
}


nameInput.onkeyup = function () {
    if (nameValedation() && urlValedation()) {
        addBtn.removeAttribute("disabled")
    }
    else {
        addBtn.disabled = "true";
    }
}


urlInput.onkeyup = function () {
    if (nameValedation() && urlValedation()) {
        addBtn.removeAttribute("disabled")
    }
    else {
        addBtn.disabled = "true";
    }
}

