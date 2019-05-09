import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormValidationRegExService} from '../../shared/services/formValidation/form-validation-RegEx.service';
import {OForm as ObjectTypes} from '../../shared/model/ObjectTypes';
import {ERole} from '../../shared/model/role';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.styl']
})
export class FormGroupComponent implements OnInit {

  title = '<a href="https://angular.io/api/forms/FormGroup">Form Group</a>';
  description = 'FormGroup - Группа отдельных элементов управления (FormControl) <br><hr>';

  roles = [ERole.USER, ERole.ADMIN, ERole.VISITOR];
  objectFormGroup: FormGroup;
  submit = new EventEmitter<boolean>();

  constructor( private validate: FormValidationRegExService ) {}

  ngOnInit() {
      /**
       * FormGroup - Группа отдельных элементов управления (FormControl)
       * FormControl - Класс который представляет отдельные элементы управления
       * @type {FormGroup}
       */
      this.objectFormGroup = new FormGroup({
          firstName: new FormControl('Введите имя', [
              this.validate.userName(),
              Validators.minLength(4)
          ]),
          age: new FormControl(null, [
              Validators.required,
              Validators.pattern('[0-9]*'),
              Validators.min(20),
              Validators.max(50)
            ]),
          role: new FormControl(null, Validators.required),
          authorization: new FormGroup({
              email: new FormControl('', [
                  Validators.required,
                  Validators.email
              ]),
              password: new FormControl('', [
                  Validators.required,
                  Validators.minLength(4),
                  Validators.maxLength(8)
              ]),
          })
      });
  }

  createTasks() {
    this.objectFormGroup.reset(); // просто сброс всей формы
    //  setValue - Недает возможности пропускать значения. Обязательно нужно описывать весь обьект
    this.objectFormGroup.setValue({
      firstName: 'Твое Имя',
      age: 25,
      role: ERole.USER,
      authorization: {
          email: 'email@gmail.com',
          password: '1234567',
      }
    });
    this.submit.emit(true);
  }
}
