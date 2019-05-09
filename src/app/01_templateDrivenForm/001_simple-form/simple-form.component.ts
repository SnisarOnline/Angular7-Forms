import {Component, EventEmitter} from '@angular/core';
import {OForm as ObjectTypes} from '../../shared/model/ObjectTypes';

@Component({
  selector: 'templatedriven-simple-form',
  templateUrl: './simple-form.component.html',
})
export class SimpleFormComponent {

  title = 'Simple Form';
  description = '';

  roles = ['User', 'Admin', 'Anonymous'];
  objectSimpleForm: ObjectTypes = new ObjectTypes(0, '', 0, null, null, null);
  submit = new EventEmitter<boolean>();

  constructor() {}

  createTasks() {
      this.submit.emit(true);
  }
}
