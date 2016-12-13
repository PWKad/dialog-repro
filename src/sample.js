import {ModalService} from './modal-service';
import {Prompt} from './prompt';

export class Sample {
  accountId = 1;
  static inject = [ModalService];
  constructor(modalService) {
    this.modalService = modalService;
    console.log(this)
  }

  createProjectButtonClick() {
    this.modalService.open({
      viewModel: Prompt,
      model: { accountId: this.accountId },
    }).then(result => {
      if(result.wasCancelled) {
        return;
      }
      console.log(result);
    });
  }
}
