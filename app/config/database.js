import low from 'lowdb';
const username = require('username');
let fs = require('fs');

let myUsername = username.sync();

let dbFileName = 'db.json';
let dbFilePath = '/Users/' + myUsername + '/.studious/';

// check if database directory exists
if (!fs.existsSync(dbFilePath)) {
    // create directory
    fs.mkdirSync(dbFilePath)

    if (!fs.existsSync(dbFilePath + dbFileName)) {
        // create file
        fs.writeFileSync(dbFilePath + dbFileName, "", 'utf-8');
    }
}



let db = low(dbFilePath + dbFileName);

let schema = {
    user: {
        username: myUsername,
        name: '',
        profilePicturePath: '',
        theme: 'default',
        isFirstRun: true
    },
    classes: [],
    homework: []
}

db.defaults(schema).write();
window.lowDB = db;