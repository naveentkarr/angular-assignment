import { HomeService } from './../../home/home.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
@Input('cardData') cardData :any
@Input('itemData') itemData :any

taskId: any;
  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.taskId = this.route.snapshot.paramMap.get('id');
  }
  deleteCardSubmit() {
     this.homeService.removeCard(this.taskId, this.itemData.id, this.cardData.id);
  }
renameCardSubmit(name, form) {
    if (form.valid) {
      this.cardData.cardName = name;
      this.homeService.editTaskItem(this.taskId, this.itemData.id, this.cardData);
    }

  }
}
