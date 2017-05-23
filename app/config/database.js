let _ = require('lodash');
let low = require('lowdb');

// var db = low('../../data/db.json');
let db = low('./db.json');
console.log(db);

let users = db.get('users')
    .find({ id: 8})
    .value();

alert(users);
alert(users);