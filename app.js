'use strict';

var form = document.getElementById('myform');
var table= document.getElementById('myTable');
var data = [];

function Person(userName, gender, mood) {
    this.userName=userName;
    this.gender=gender;
    this.mood=mood;
    console.log(data);
}

function formData(event) {
    console.log('formdata');
    event.preventDefault();

    var userName = event.target.userName.value;
    var gender = event.target.gender.value;
    var mood = event.target.mood.checked;
    console.log(userName, gender, mood);
    data.push(new Person(userName, gender, mood));
    updateTable();
    form.reset();
}

function updateTable() {
    var row = row;
    for(var i=0; i<data.length; i++) {
        row=document.createElement('tr');
        row.innerHTML = '<td>' + data[i].userName + '</td>' +
        '<td>' + data[i].gender + '</td>' +
        '<td>' + data[i].mood + '</td>'
    }
    table.appendChild(row);
}

form.addEventListener('submit', formData);