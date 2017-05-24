import low from 'lowdb';
const username = require('username');
let fs = require('fs');

let myUsername = username.sync();

// check if database directory exists
if (!fs.existsSync('/Users/' + myUsername + '.studious/')) {

    // create directory

    if (!fs.existsSync('/Users/' + myUsername + '.studious/db.json')) {

        // create file

    }

}



let db = low('/Users/' + myUsername + '.studious/db.json');

let schema = {
    users: [],
    classes: [],
    homework: []
}

db.defaults(schema).write();
window.lowDB = db;