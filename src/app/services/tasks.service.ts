import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './../models/task.interface';

const baseUrl = '../../assets/data/tasks.json';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getALLTaskList(): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl);
  }
}
