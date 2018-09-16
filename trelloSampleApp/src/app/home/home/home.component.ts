import { Component, OnInit, TemplateRef } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  addTaskData = {
    name: ''
  };
  taskData = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getTaskList().subscribe((res: any) => {
      console.log(res);
      this.taskData = res;

    }, error => {

    });
  }

  addTask(form:any) {
    if(form.valid){
       this.homeService.addTask(this.addTaskData.name);
    
    }
   
  }
}
