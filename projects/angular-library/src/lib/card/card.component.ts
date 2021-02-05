import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

  getImage(): string {
    if (this.type === 'male') {
      return 'https://www.w3schools.com/howto/img_avatar.png';
    }

    return 'https://www.w3schools.com/howto/img_avatar2.png';
  }

}
