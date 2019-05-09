import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormValidationRegExService} from '../../../shared/services/formValidation/form-validation-RegEx.service';

@Component({
  selector: 'app-form-array-add-one',
  templateUrl: './002-form-array-add-one.component.html',
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
export class FormArrayAddOneComponent implements OnInit {
    title = `<a href="https://angular.io/api/forms/FormArray#formarray">Form Array</a>
      <a href="https://angular.io/api/forms/FormArray#adding-or-removing-controls-from-a-form-array"> add/rem One Input </a>
`;
    description = `
    <ol>
      <li>Добавляем/Удаляем только 1 input</li>
      <li>Все поля сбрасываются после изменения формы</li>
      <li>Основная форма валедируется, даже если в новом поле допустили ошибку</li>
    </ol>
`;

    public submit = new EventEmitter<boolean>();
    public objectDynamicForm: FormGroup;

    constructor(
       private validate: FormValidationRegExService
    ) {}

    /**
     * Создание формы
     */
    ngOnInit() {
        this.objectDynamicForm = new FormGroup({
            firstName: new FormControl('minLength, userName() ', [
                this.validate.userName(),
                Validators.minLength(4)
            ]),
            address: new FormArray([
                new FormControl('required', Validators.required),
                new FormControl('minLength', [
                    Validators.minLength(4)
                ]),
            ])
        });
    }

    /**
     * Чтобы Неписать макароний-код, Укорачиваем записи
     * @returns {FormArray}
     */
    get addressFormArray(): FormArray { return this.objectDynamicForm.get('address') as FormArray; }

    /**
     * Добавление полей в форму
     */
    addInput() {
        this.addressFormArray.push(new FormControl('required,minLength,[0-9]', [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^[0-9]*$')
        ]));
        console.log( 'addInput (required,minLength,[0-9]) = ', this.objectDynamicForm.value );
    }

    /**
     * Удаление полей из формы
     * @param i {number} порядкой номер в масиве поля который нужно удалить
     */
    removeInput(i) {
        this.addressFormArray.removeAt(i);
        console.log( 'removeInput = ', this.objectDynamicForm.value );
    }

    /**
     * Отправка формы и очистка
     */
    createTasks() {
        // // console.log('Одинаково ? = ', this.addressFormArray.controls == this.objectDynamicForm.controls.address.controls);
        // console.log('.addressFormArray.controls[0].errors = ', this.addressFormArray.controls[0].errors);
        // console.log('.addressFormArray.controls[0].value = ', this.addressFormArray.controls[0].value);
        // console.log('.addressFormArray.get("0").errors = ', this.addressFormArray.get('0').errors );
        // console.log('.addressFormArray.at(0).errors = ', this.addressFormArray.at(0).errors );
        // console.log('.addressFormArray.get("0").value = ', this.addressFormArray.get('0').value );

        console.log('.objectDynamicForm.valid = ', this.objectDynamicForm.valid);
        this.submit.emit(true);
        this.objectDynamicForm.reset();
    }
}
