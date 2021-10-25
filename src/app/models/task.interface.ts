import { Comment } from './comments.interface'; 

export interface Task {
    taskID?: string,
    taskDescription?: string,
    status?: string, //make this enum
    progress?: string,
    ownerID?: number,
    assigneeID?: number,
    comments?: Comment[],
    creationDate: string
}