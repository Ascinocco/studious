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

    constructor(homeworkInfo: any)
    {
        if (homeworkInfo.dueDate) {
            homeworkInfo.dueDate = moment(homeworkInfo.dueDate);
        }

        if (homeworkInfo.attachments) {
            homeworkInfo.attachments = StudiousHomework.parseAttachements(homeworkInfo.attachments);
        }

        super(homeworkInfo, 'homework');
        this.collection = 'homework';
        this.name = homeworkInfo.name;
        this.class = homeworkInfo.class;
        this.type = homeworkInfo.type;
        this.dueDate = homeworkInfo.dueDate;
        this.weight = homeworkInfo.weight;
        this.attachments = [];

        if (homeworkInfo.attachements) {
            this.addAttachements(homeworkInfo.attachements);
        }

        this.notes = homeworkInfo.notes;

        this.isComplete = false;
    }

    public static find(query: any): StudiousHomework
    {
        return StudiousHomework.db.get('homework')
            .find(query)
            .value();
    }

    private addAttachements(attachements: Array<any>): void
    {
        // TODO: implement add attachments
        this.attachments = [];
    }

    private static parseAttachements(attachments: Array<any>): Array<any>
    {
        // TODO: implement attachement storage
        return [];
    }
}