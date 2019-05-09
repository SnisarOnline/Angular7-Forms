import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormValidationRegExService} from '../../../shared/services/formValidation/form-validation-RegEx.service';

@Component({
  selector: 'app-form-control-add-one',
  templateUrl: './001-form-control-add-one.component.html',
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
export class FormControlAddOneComponent implements OnInit {
    title = `<a href="https://angular.io/api/forms/FormGroup#addcontrol">FormControl</a> add One Input`;
    description = `
    <ol>
      <li>Все поля сбрасываются после изменения формы</li>
    </ol>
    `;

    public submit = new EventEmitter<boolean>();
    public objectDynamicForm: FormGroup;
    public arrControlName: string[] = ['firstName'];

    constructor( private validate: FormValidationRegExService ) {}

    /**
     * Создание формы
     */
    ngOnInit() {
        this.objectDynamicForm = new FormGroup({
            firstName: new FormControl('minLength, userName() ', [
                this.validate.userName(),
                Validators.minLength(4)
            ])
        });

    }

    /**
     * Добавление полей в форму
     */
    addInput(name) {
        this.objectDynamicForm.addControl('new-' + name, new FormControl('address required', Validators.required));
        this.validateAllFormFields(this.objectDynamicForm);
        console.log( 'addInput = ', this.objectDynamicForm.value );
    }

    /**
     * Удаление полей из формы
     */
    removeInput(name: string) {
        this.objectDynamicForm.removeControl(name);
        console.log( 'removeInput = ', this.objectDynamicForm.value );
    }

    /**
     * Отправка формы и очистка
     */
    createTasks() {
        console.log('.objectDynamicForm.controls = ', this.objectDynamicForm.controls);
        this.submit.emit(true);
        // this.objectDynamicForm.reset();
    }


    /**
     * Поиска всех FormControl в форме
     * @param {FormGroup} formGroup
     * @returns {string[]}
     */
    private validateAllFormFields(formGroup: FormGroup) {
/*
        for (const controlsKey in formGroup.controls) {
            if (this.arrControlName.indexOf(controlsKey) < 0) {
                this.arrControlName.push(controlsKey);
            }
        }
*/
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);

            if (control instanceof FormControl) {
                if (this.arrControlName.indexOf(field) < 0) {
                    this.arrControlName.push(field);
                }
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}
