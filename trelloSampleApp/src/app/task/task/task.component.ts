import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HomeService } from './../../home/home.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DndListEvent } from '@fjsc/ng2-dnd-list';
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
  taskId: any;
  cardData: any;
  itemData: any;

  constructor(private homeService: HomeService, private route: ActivatedRoute, private modalService: BsModalService) { }
  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.homeService.getTask(this.taskId).subscribe((res: any) => {
      
      this.taskData = res[0];

    }, error => {

    });
  }
  openModal(template: TemplateRef<any>, item, card) {
    this.cardData = JSON.parse(JSON.stringify(card));
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
  renameItemSubmit(item, name) {
    if(name){
this.homeService.renameTaskItem(this.taskId, item.id, name);
    }

  }
  editCardSubmit() {
    this.homeService.editTaskItemCard(this.taskData.id, this.itemData.id, this.cardData);
    this.modalRef.hide();
  }
  public onDragstart(event: DragEvent, item: any, card: any) {
    card.selected = true;
  }
  public onDrop(event: DndListEvent, item) {
    console.log(event, item)
    item.cardList.splice(event.index, 0, event.item)
  }
  onMoved(index, item) {
    item.cardList = item.cardList.filter(function (item) { return !item.selected; });
  }

  onSelectItem(card) {
    card.selected = !card.selected;
  }
}
