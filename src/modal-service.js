import { DialogService } from 'aurelia-dialog';

export class ModalService {
  static inject = [DialogService];
  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  open(modalModel) {
    return this.dialogService.open(modalModel);
  }
}
