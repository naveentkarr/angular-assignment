import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeHeaderComponent],
  exports: [HomeHeaderComponent]
})
export class SharedModule { }
