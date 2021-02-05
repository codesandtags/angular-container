import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;

  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

  getClasses(): object {
    return {
      'success': this.type === 'success',
      'danger': this.type === 'danger',
      'info': this.type === 'info',
      'warning': this.type === 'warning',
      'default': this.type === ''
    } 
  }
}
