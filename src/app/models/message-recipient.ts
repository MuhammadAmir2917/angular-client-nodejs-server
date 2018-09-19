import { Message } from './message';
import { Group } from './group';
import { User } from './user';

export class MessageRecipient{
    _id : string;
    user : User;
    group : Group;
    message : Message;
    is_read : boolean

    
}