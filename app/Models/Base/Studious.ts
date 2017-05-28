let low = require('lowdb');
let uniqid = require('uniqid');

const username = require('username');
let myUsername = username.sync();
let dbFile = '/Users/' + myUsername + '/.studious/db.json';

let db = low(dbFile);

export class Studious
{
    public static collection: string = '';
    public id: string;

    constructor() {
        this.id = uniqid();
    }

    public static find(query: any): any
    {
        return db.get(Studious.collection)
            .find(query)
            .value();
    }

    public update (updates: any): any
    {
        db.get(Studious.collection)
            .find({ id: this.id })
            .assign(updates)
            .write();
    }

    public delete(): any
    {
        db.get(Studious.collection)
            .remove({ id: this.id })
            .write();
    }
}