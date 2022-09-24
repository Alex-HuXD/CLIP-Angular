import { Injectable } from '@angular/core';

// 3 ways to inject the services
// default way is make it injectable to root thus availble to all components
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  visible = false;

  constructor() {}
}