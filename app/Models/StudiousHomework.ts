import { Studious } from './Base/Studious';
let moment = require('moment');

export class StudiousHomework extends Studious
{
    public collection: string;
    public name: string;
    public class: string;
    public type: string;
    public dueDate: string;
    public weight: string;
    public attachments: Array<any>;
    public notes: string;
    public isComplete: boolean;
    public tasks: Array<any>;

    constructor(homeworkInfo: any)
    {
        if (homeworkInfo.dueDate) {
            homeworkInfo.dueDate = moment(homeworkInfo.dueDate);
        }

        super(homeworkInfo, 'homework');
        this.collection = 'homework';
        this.name = homeworkInfo.name;
        this.class = homeworkInfo.class;
        this.type = homeworkInfo.type;
        this.dueDate = homeworkInfo.dueDate;
        this.weight = homeworkInfo.weight;
        this.attachments = homeworkInfo.attachments;
        this.notes = homeworkInfo.notes;
        this.tasks = [];
        this.tasks = homeworkInfo.tasks;
        this.isComplete = false;
    }

    public static find(query?: any): StudiousHomework
    {
        if (query) {
            return StudiousHomework.db.get('homework')
                .find(query)
                .value();
        } else {
            return StudiousHomework.db.get('homework').value();
        }
    }
}