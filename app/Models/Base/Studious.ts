let low = require('lowdb');
let uniqid = require('uniqid');

const username = require('username');
let myUsername = username.sync();
let dbFile = '/Users/' + myUsername + '/.studious/db.json';

let db = low(dbFile);

export class Studious
{
    protected static db: any = db;
    public collection: string;
    public id: string;

    constructor (data: any, collection: string) {
        this.id = uniqid();
        data.id = this.id;
        this.collection = collection;

        db.get(this.collection)
            .push(data)
            .write();
    }

    public update (updates: any): any
    {
        return db.get(this.collection)
            .find({ id: this.id })
            .assign(updates)
            .write();
    }

    public delete (): any
    {
        db.get(this.collection)
            .remove({ id: this.id })
            .write();   
    }
}