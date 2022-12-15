import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  //default alter bg-color
  @Input() color = 'blue';

  //get bg-color for different alert
  get bgColor() {
    return `bg-${this.color}-400`;
  }
}
