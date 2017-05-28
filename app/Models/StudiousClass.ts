import { Studious } from './Base/Studious';
export class StudiousClass extends Studious
{
    public static collection: string = 'classes';

    constructor()
    {
        super();
        alert(StudiousClass.collection);
        alert(this.id);
    }
}