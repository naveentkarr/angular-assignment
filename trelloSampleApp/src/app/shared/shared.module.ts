import { AutoFocusDirective } from './directives/auto-focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeHeaderComponent, AutoFocusDirective],
  exports: [HomeHeaderComponent, AutoFocusDirective]
})
export class SharedModule { }
