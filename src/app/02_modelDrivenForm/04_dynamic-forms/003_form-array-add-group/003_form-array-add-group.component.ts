import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormValidationRegExService} from '../../../shared/services/formValidation/form-validation-RegEx.service';

@Component({
  selector: 'app-form-array-add-group',
  templateUrl: './003_form-array-add-group.component.html',
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
export class FormArrayAddGroupComponent implements OnInit {
    title = `Add FormGroup`;
    description = `
    <ol>
      <li>Добавляем/Удаляем групу input</li>
    </ol>
`;

    public submit = new EventEmitter<boolean>();
    public objectDynamicForm: FormGroup;

    constructor(
       private _fb: FormBuilder,
       private validate: FormValidationRegExService
    ) {}

    /**
     * Создание формы
     */
    ngOnInit() {
        this.objectDynamicForm = this._fb.group({
            firstName: [ null, [
                this.validate.userName(),
                Validators.minLength(4)
            ]],
            address: this._fb.array([
                this.initAddress()
            ])
        });
    }


    /**
     * Описание полей в форме которые будем добавлять при необходимости
     * @returns {FormGroup}
     */
    initAddress() {
        return this._fb.group({
            city: [null, this.validate.text()],
            street: [null, this.validate.text()]
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
        this.addressFormArray.push(this.initAddress());
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

        // console.log('.objectDynamicForm.valid = ', this.objectDynamicForm.valid);
        // this.submit.emit(true);
        // this.objectDynamicForm.reset();
    }
}
