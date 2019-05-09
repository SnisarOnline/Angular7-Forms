import {Component, EventEmitter} from '@angular/core';
import {FormControl, Validators} from '@angular/forms'; // Статические методы для валидации форм
import {FormsValidationsService} from './form-validation-function.service'; // Свои методы валидации форм
import {OForm as ObjectTypes} from '../../shared/model/ObjectTypes';
import {ERole} from '../../shared/model/role';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styles: [`
      .ng-valid[required] {
          border-left: 5px solid green;
      }

      .ng-invalid:not(form) {
          border-left: 5px solid red;
      }

      input[type=submit]:disabled, button:disabled {
          cursor: not-allowed;
      }
  `]
})
export class FormControlComponent {

  title = `<a href="https://angular.io/api/forms/FormControl">Form Control</a>`;
  description = `
    FormControl - Класс который представляет отдельные элементы управления; <br>
    Validators - Класс со Статическими методы для валидации форм <hr>
  `;

  roles = [ERole.USER, ERole.ADMIN, ERole.VISITOR];
  objectFormControl: ObjectTypes = {
    id: null,
    firstName: '',
    age: null,
    role: null
  };

  /**
   * Свои методы валидации форм
   * FormControl - Класс который представляет отдельные элементы управления
   * @type {FormControl}
   */
  firstName = new FormControl(
    '',
    [
      Validators.required,
      FormsValidationsService.cannotContainMinMaxLength,
      FormsValidationsService.cannotContainSeparatorName
    ]
  );
  /**
   * Статические методы для валидации форм
   * @type {FormControl}
   */
  age = new FormControl(
    null,
    [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.min(20),
      Validators.max(50)
    ]
  );
  // Статические методы для валидации форм
  role = new FormControl( '', Validators.required );

  submit = new EventEmitter<boolean>();

  constructor() {}

  createTasks(Event: Event) {
    Event.preventDefault();

    // console.log('Form Control this.firstName = ', this.firstName);
    // console.log('Form Control this.age = ', this.age);

    this.objectFormControl.firstName = this.firstName.value;
    this.objectFormControl.age = this.age.value;
    this.objectFormControl.role = this.role.value;
    this.submit.emit(true);
  }
}
