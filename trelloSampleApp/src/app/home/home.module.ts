import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [HomeComponent, HeaderHomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
