import {DialogController} from 'aurelia-dialog';
import {singleton} from 'aurelia-dependency-injection';

@singleton(true)
export class ModalController {
  static inject = [DialogController];
  constructor(dialogController) {
    this.dialogController = dialogController;
    this.settings = dialogController.settings;
  }

  ok(model) {
    return this.dialogController.ok(model);
  }

  cancel(model) {
    return this.dialogController.cancel(model);
  }
}
