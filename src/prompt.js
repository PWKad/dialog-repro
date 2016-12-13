import {ModalController} from './modal-controller';
import {NewInstance, Container} from 'aurelia-dependency-injection';

export class Prompt {
  static inject = [NewInstance.of(ModalController), Container];
  constructor(modalController, container) {
    this.modalController = modalController;
    console.log(container)
  }

  save() {
    this.modalController.ok(result);
  }

  cancelButtonClick() {
    this.modalController.cancel();
  }
}
