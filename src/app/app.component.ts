import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Clips';
  showModal = true;

  constructor(public modal: ModalService) {}

  ngOnInit() {
    setInterval(() => {
      this.showModal = !this.showModal;
      console.log(this.modal.modals);
    }, 1000);
  }
}
