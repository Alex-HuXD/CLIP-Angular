import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
// list service in the provider array make this service available to everything inside this module
// import { ModalService } from '../services/modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent],

  // providers:[ModalService]
})
export class SharedModule {}
