import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
// list service in the provider array make this service available to everything inside this module
// import { ModalService } from '../services/modal.service';

@NgModule({
  declarations: [ModalComponent, TabsContainerComponent, TabComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabsContainerComponent, TabComponent],

  // providers:[ModalService]
})
export class SharedModule {}
