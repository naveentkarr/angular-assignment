import { Injectable } from '@angular/core';

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
       
      ]
      }
    ]
  }
]
  constructor() { }
  
}
