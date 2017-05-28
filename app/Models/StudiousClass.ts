import { Studious } from './Base/Studious';
export class StudiousClass extends Studious
{
    public collection: string;
    public name: string;
    public professor: string;
    public location: string;

    constructor(classInfo: any)
    {
        super(classInfo, 'classes');
        this.name = classInfo.name;
        this.collection = 'classes';
        this.professor = classInfo.professor;
        this.location = classInfo.location;

        // alert(this.id);
        // alert(this.name);
        // alert(this.location);
    }

    public static find (query: any): StudiousClass
    {
        return StudiousClass.db.get('classes')
            .find(query)
            .value();
    }
}