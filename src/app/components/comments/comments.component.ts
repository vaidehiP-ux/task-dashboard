
import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';;
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private _taskService: TasksService) { }

  @Input() taskComments!: any;

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {
    console.log("my comments", this.taskComments);
  }

  sendCommentID(commentID: string) {
    this.messageEvent.emit(commentID);
  }
  
}


