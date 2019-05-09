import {Component, EventEmitter} from '@angular/core';
import {OForm as ObjectTypes} from '../../shared/model/ObjectTypes';

@Component({
  selector: 'templatedriven-show-msg-error',
  templateUrl: './show-msg-error.component.html',
  styles: [`
    .ng-valid[required]{
        border-bottom: 3px solid green;
    }
    .ng-invalid:not(form){
        border-bottom: 3px solid red;
    }
  `]
})
export class ShowMsgErrorComponent {

  title = 'Show msg error';
  description = '';

  roles = ['User', 'Admin', 'Anonymous'];
  objectSimpleForm: ObjectTypes;
  submit = new EventEmitter<boolean>();

  constructor() {
    this.objectSimpleForm =  new ObjectTypes(0, '', 0, null, null, null);
  }

  createTasks() {
      this.submit.emit(true);
  }
}
