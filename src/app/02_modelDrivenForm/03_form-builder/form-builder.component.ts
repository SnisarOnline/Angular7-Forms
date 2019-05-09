import {Component, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormValidationRegExService} from '../../shared/services/formValidation/form-validation-RegEx.service';
import {OForm as ObjectTypes} from '../../shared/model/ObjectTypes';
import {ERole} from '../../shared/model/role';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styles: [`
        .ng-valid[required] {
            border-left: 5px solid green;
        }

        .ng-invalid:not(form):not(.form-group) {
            border-left: 5px solid red;
        }

        input[type=submit]:disabled, button:disabled {
            cursor: not-allowed;
        }
    `]
})
/**
 * @info http://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example
 */
export class FormBuilderComponent {

  title = '<a href="https://angular.io/api/forms/FormBuilder">Form Builder</a>';
  description = `
      FormBuilder - Синтаксический Сахор. <br>
      Класс Предоставляющий удобный интерйфейс для создания и управления формами.<br><hr>
    `;

  submit = new EventEmitter<boolean>();
  roles = [ERole.USER, ERole.ADMIN, ERole.VISITOR];
  objectFormBuilder: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validate: FormValidationRegExService,
  ) {
    this.buildForm();
  }

  /* Благодаря "FormBuilder"  Создание формы проще читается */
  private buildForm() {
      /**
       * FormBuilder - Синтаксический Сахор. Класс Предоставляющий удобный интерйфейс
       *    для создания формы.
       * FormGroup - Группа отдельных элементов управления (FormControl)
       * FormControl - Класс который представляет отдельные элемент управления
       */
      this.objectFormBuilder = this.fb.group({
      firstName: [null, [
          this.validate.userName(),
          Validators.minLength(4)
      ]],
      age: [null, [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.min(20),
          Validators.max(50)
      ]],
      role: [null, Validators.required],
      authorization: this.fb.group({
          email: [null, this.validate.email() ],
          password: [null, this.validate.password() ],
      }),
      address: this.fb.group({
        street: [null, this.validate.text()],
        city: [null]
      }),
    });
  }

  createTasks() {
    // console.log(this.objectFormBuilder.value);
    this.objectFormBuilder.reset();
      //  setValue - Недает возможности пропускать значения. Обязательно нужно описывать весь обьект
    this.objectFormBuilder.setValue({
      firstName: 'Твое Имя',
      age: 25,
      role: ERole.USER,
      authorization: {
          email: 'email@gmail.com',
          password: '1234567',
      },
      address: {
        street: 'Улица',
        city: 'Город'
      }
    });
    this.submit.emit(true);
  }
}
