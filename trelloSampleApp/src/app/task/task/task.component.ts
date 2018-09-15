import { HomeService } from './../../home/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor(private homeService: HomeService, private route: ActivatedRoute) { }
  taskData: any;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.homeService.getTask(id).subscribe((res: any) => {
      console.log(res[0].itemList);
      this.taskData = res[0];

    }, error => {

    });
  }
  deleteTaskItem(){
    
  }

}
