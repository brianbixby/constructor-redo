'use strict';

var form = document.getElementById('house-form');
var table = document.getElementById('car-table');
var data = [];

function House(street,city,state,zip,selling,ownershipLength) {
    this.street=street;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.selling=selling;
    this.ownershipLength=ownershipLength;
    console.log(data);
}

function formData(event) {
    event.preventDefault();

    var street=event.target.street.value;
    var city=event.target.city.value;
    var state=event.target.state.value;
    var zip=event.target.zip.value;
    var selling = event.target.selling.checked;
    var ownershipLength = event.target.ownershipLength.value;

    data.push(new House(street, city, state, zip, selling, ownershipLength));
    createTable();
    form.reset();
}

function createTable() {
    var row;
    for (var i = 0; i < data.length; i++) {
        console.log(row);
        row = document.createElement('tr');
        row.innerHTML = '<td>' + data[i].street +'</td>' +
        '<td>' + data[i].city + '</td>' +
        '<td>' + data[i].state + '</td>' +
        '<td>' + data[i].zip + '</td>' +
        '<td>' + data[i].selling + '</td>' +
        '<td>' + data[i].ownershipLength + '</td>'
    }
    console.log(row);
    table.appendChild(row);
}

form.addEventListener('submit', formData);