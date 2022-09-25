import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  //list services here make it only available to this single component
  // providers: [ModalService],
})
export class ModalComponent implements OnInit {
  @Input() modalID = '';

  constructor(public modal: ModalService) {}

  ngOnInit(): void {}
}
