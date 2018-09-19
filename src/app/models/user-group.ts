import { Group } from './group';
import { User } from './user';

export class UserGroup{
    _id : string;
    user : User;
    group : Group;
    created_date : Date;
    is_active : boolean;
}