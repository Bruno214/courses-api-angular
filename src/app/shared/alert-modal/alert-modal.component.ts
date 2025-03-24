import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss'
})
export class AlertModalComponent {

  @Input({required:true}) message: string ="";
  @Input({required:true}) type: string ="success";


  constructor(private bsModalRef: BsModalRef) {}

  onClose() {
    this.bsModalRef.hide();
  }
}
