import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ],
  declarations: [TaskComponent],
  exports: [TaskComponent]
})
export class TaskModule { }
