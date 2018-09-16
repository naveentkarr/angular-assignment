import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HomeService } from './../../home/home.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
   modalRef: BsModalRef;
  config = {
    animated: true
  };
  taskData: any;
  addTaskItem = {
    name: ''
  };
  taskId:any;
  cardData: any;
  itemData: any;
  constructor(private homeService: HomeService, private route: ActivatedRoute, private modalService: BsModalService) { }
  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.homeService.getTask(this.taskId).subscribe((res: any) => {
      console.log(res[0].itemList);
      this.taskData = res[0];

    }, error => {

    });
  }
  openModal(template: TemplateRef<any>, item, card) {
    this.cardData = card;
    this.itemData = item;
    this.modalRef = this.modalService.show(template, this.config);
  }
  deleteTaskItem(itemIndex) {
    this.homeService.removeTaskItem(this.taskId, itemIndex);
  }
  addTaskItemSubmit() {
    this.homeService.addTaskItem(this.taskData.id, this.addTaskItem.name);
    this.addTaskItem.name = '';
  }
  editCardSubmit() {
     this.homeService.editTaskItem(this.taskData.id, this.itemData.id, this.cardData);
     this.modalRef.hide();
  }
}
