import { SharedModule } from './../shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';
import { RenameTaskComponent } from './rename-task/rename-task.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [TaskComponent, RenameTaskComponent],
  exports: [TaskComponent, RenameTaskComponent]
})
export class TaskModule { }
