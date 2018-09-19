import { User } from './user';

export class Conversation{
    _id : string;
    user_one : User;
    user_two : User;
    time : number;
    status : number;
}