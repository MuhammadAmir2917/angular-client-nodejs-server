import { User } from './user';

export class ConversationMessage {
    _id : string;
    message : string;
    user : User;
    time : number;

}