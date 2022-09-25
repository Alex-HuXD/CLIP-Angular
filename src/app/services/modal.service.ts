import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

// 3 ways to inject the services
// default way is make it injectable to root thus availble to all components
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modals: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    // this.visible = !this.visible;
    let target = this.modals.find((element) => (element.id = id));
    target ? (target.visible = !target.visible) : null;
  }
}
