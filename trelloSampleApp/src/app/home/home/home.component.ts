import { Component, OnInit, TemplateRef } from '@angular/core';
import { HomeService } from '../home.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    animated: true
  };
  addTaskData = {
    name: ''
  };
  taskData = [];
  constructor(private homeService: HomeService, private modalService: BsModalService) { }

  ngOnInit() {
    this.homeService.getTaskList().subscribe((res: any) => {
      console.log(res);
      this.taskData = res;

    }, error => {

    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  addTask(form:any) {
    if(form.valid){
       this.homeService.addTask(this.addTaskData.name);
    this.modalRef.hide();
    }
   
  }
}
