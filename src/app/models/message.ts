import { User } from './user';

export class Message {
    _id : string;
    subject : string;
    sender : User;
    create_date : Date
}