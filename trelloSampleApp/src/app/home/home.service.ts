import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter, map } from 'rxjs/operators';
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
            new Card('first card',10, '', [], [])
          ]
        }
      ]
    },
    {
      taskName: 'two ',
      id: 1,
      itemList: [
        {
          itemName: 'two To Do',
          id: 1,
          cardList: [
            new Card('', 21, '', [], [])
          ]
        }
      ]
    }
  ];
  private taskDataSubject = new BehaviorSubject<any>(this.tasksList);
  // private taskdDataSubject = new BehaviorSubject<any>(this.tasksList).pipe(filter((x:any) => {
  //   return "sd";
  // }));
  constructor(private http: HttpClient) { }
  updateTaskData(data) {
    this.taskDataSubject.next(data);
  }
  getTaskList() {
    return this.taskDataSubject.asObservable().pipe();
  }
  getTask(id) {
    return this.taskDataSubject.asObservable().pipe(map(arr => {
      console.log(arr);
      return arr.filter(r => {
        console.log(r);
        return r.id == id;
      });
    }));
  }
  addTask(name) {
    this.tasksList.push(
      {
        taskName: name,
        id: this.tasksList.length,
        itemList: []
      }
    );
    this.updateTaskData(this.tasksList);
  }
  renameTask(name, id) {
    for (let item of this.tasksList) {
      if (id == item.id) {
        item.taskName = name;
      }
    }
    this.updateTaskData(this.tasksList);
  }
  removeTaskItem(taskId, itemIndex) {
    for (let data of this.tasksList) {
      if (data.id == taskId) {
        data.itemList.splice(itemIndex, 1);
      }

    }
    this.updateTaskData(this.tasksList);
  }
  addTaskItem(taskId, itemName) {
    for (let data of this.tasksList) {
      if (data.id == taskId) {
        data.itemList.push(
          {
            itemName: itemName,
            id: data.itemList.length,
            cardList: []
          }
        );
      }

    }
  }
  editTaskItem(taskId, itemId, cardData) {
    for (let data of this.tasksList) {
      for (let item of data.itemList) {
        for (let card of item.cardList) {
          if (data.id == taskId && itemId == item.id && cardData.id == card.id) {
            card = cardData;
          }

        }

      }

    }
  }
  addCard(taskId, itemId, cardName) {
    for (let data of this.tasksList) {
      for (let item of data.itemList) {
        if (data.id == taskId && itemId == item.id) {
          let cardId=`${itemId+1}${item.cardList.length}`
          item.cardList.push(
            new Card(cardName, parseInt(cardId), '', [], [])
          );
        }

      }

    }
  }
  removeCard(taskId, itemId, cardId) {
for (let data of this.tasksList) {
      for (let item of data.itemList) {
          if (data.id == taskId && itemId == item.id) {
           item.cardList=item.cardList.filter(x=>{
             return x.id!=cardId;
           })
          }
      }
    }
  }
}
