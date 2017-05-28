/**
 * StudiousClass
 * Given the somewhat conflicting name with the keyword class
 * I thought it would be worth noting that class in the context of properties on this object
 * refers to a class in school i.e MATH3002 or COMP3001 or even just Physics
 */
import { Studious } from './Base/Studious';
let moment = require('moment');

export class StudiousClass extends Studious
{
    public collection: string;
    public name: string;
    public professor: string;
    public location: string;

    public startDate: string;
    public endDate: string;
    public classPeriods: Array<any>;
    public color: string;

    constructor(classInfo: any)
    {
        if (classInfo.classPeriods) {
            classInfo.classPeriods = StudiousClass.parseClassPeriods(classInfo.classPeriods);
        }

        super(classInfo, 'classes');
        this.name       = classInfo.name;
        this.collection = 'classes';
        this.professor  = classInfo.professor;
        this.location   = classInfo.location;
        this.startDate  = moment(classInfo.startDate);
        this.endDate    = moment(classInfo.endDate);
        this.classPeriods = [];

        if (classInfo.classPeriods) {
            this.addClassPeriods(classInfo.classPeriods);
        }

        this.color = classInfo.color;

    }

    private static parseClassPeriods(dates: Array<any>): Array<any>
    {
        let tempDates = [];

        for (let i = 0; i < dates.length; i++) {
            tempDates.push(moment(dates[i]));
        }

        return tempDates;
    }

    private addClassPeriods (dates: Array<any>): void
    {
        for (let i = 0; i < dates.length; i++) {
            this.classPeriods.push(moment(dates[i]));
        }
    }

    public static find (query: any): StudiousClass
    {
        return StudiousClass.db.get('classes')
            .find(query)
            .value();
    }
}