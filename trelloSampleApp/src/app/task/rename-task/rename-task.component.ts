import { HomeService } from './../../home/home.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rename-task',
  templateUrl: './rename-task.component.html',
  styleUrls: ['./rename-task.component.css']
})
export class RenameTaskComponent implements OnInit {
  @Input("taskData") taskData: any;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }
  renameTaskSubmit(name, form) {
    if (form.valid) {
      console.log(name);
      this.homeService.renameTask(name, this.taskData.id);
    }

  }
}
