import { SharedModule } from './../shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';
import { RenameTaskComponent } from './rename-task/rename-task.component';
import { AddCardComponent } from './add-card/add-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { DndListModule } from '@fjsc/ng2-dnd-list';
@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    DndListModule,
    FormsModule
  ],
  declarations: [TaskComponent, RenameTaskComponent, AddCardComponent, EditCardComponent],
  exports: [TaskComponent, RenameTaskComponent]
})
export class TaskModule { }
