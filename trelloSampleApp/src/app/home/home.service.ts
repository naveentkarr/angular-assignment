import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Card } from './data-model/card';
import { Task } from './data-model/task';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  tasksList = [
    {
      taskName: 'Welcome task',
      id: 0,
      itemList: [
        {
          itemName: 'To Do',
          id: 0,
          cardList: [
            new Card("",0,"",[],[])
          ]
        }
      ]
    }
  ]
  private taskDataSubject = new BehaviorSubject<any>(this.tasksList);
  constructor(private http: HttpClient) { }
  updateTaskData(data) {
    this.taskDataSubject.next(data);
  }
  getTaskList() {
    return this.taskDataSubject.asObservable();
  }
  addTask(name) {
    this.tasksList.push(
      {
        taskName: name,
        id: 0,
        itemList: []
      }
    )
    this.updateTaskData(this.tasksList)
  }
}
