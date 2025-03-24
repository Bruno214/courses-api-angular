import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { AlertTypes } from '../alert-typer.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) { }

  showAlert(type: AlertTypes = AlertTypes.DANGER, message: string = 'Ocorreu um Error') {
    this.modalRef = this.modalService.show(AlertModalComponent);
    this.modalRef.content.type = type;
    this.modalRef.content.message = message;
  }
}
