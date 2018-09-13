import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
tasksList=[
  {
    taskName:'Welcome task',
    id:0,
    itemList:[
      {itemName:'To Do',
      id:0,
      cardList:[
       {
           cardName:"",
           id:0,
           description:"",
           link:[],
           label:[]
       }
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
    addTask(data){

    }
}
