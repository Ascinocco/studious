import low from 'lowdb';

let db = low('/Users/anthonyscinocco/Documents/Personal/Projects/current/studious/code/data/db.json');
// let db = low(__dirname + 'data/db.json');
let schema = {
    users: [],
    classes: [],
    homework: []
}

db.defaults(schema).write();

window.lowDB = db;