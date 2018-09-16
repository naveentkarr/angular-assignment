import { ActivatedRoute } from '@angular/router';
import { HomeService } from './../../home/home.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  @Input ("itemData") itemData: any;
cardData = {
  name : ''
};
  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
addCardSubmit(form) {
  const id = this.route.snapshot.paramMap.get('id');
 if (form.valid) {
      console.log(name);
      this.homeService.addCard(id, this.itemData.id, this.cardData.name);
      this.cardData.name="";
    }

}
}
