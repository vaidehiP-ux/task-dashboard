import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task } from 'src/app/models/task.interface';
import { TasksService } from 'src/app/services/tasks.service';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-key-results',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './key-results.component.html',
  styleUrls: [
    './key-results.component.scss'
  ]
})
export class KeyResultsComponent implements OnInit {
  commentId!: string;

  taskList: Task[] = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;
  comments!: any;
  
  columns = [
    { prop: 'taskDescription', name: 'Key Results' },
    { prop: 'progress', name: 'Progress' }
  ];

  constructor(private _taskService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  //event to pass task number and load comments related to that task
  receiveMessage($event: any) {
    this.commentId = $event
    console.log("event:" , $event);
  }

  getTasks() {
    this._taskService.getALLTaskList()
    .subscribe(
      response => {
        console.log(response);
        this.taskList = response;
        //display comments for first task
        this.comments = this.taskList[0].comments;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 1500);
       
      },
      error => {
        console.log(error);
      });
  }
}
