import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OForm as ObjectTypes} from '../../../../shared/model/ObjectTypes';
import {FormValidationRegExService} from '../../../../shared/services/formValidation/form-validation-RegEx.service';
import {FormValidationService} from './form-validation-function.service';
import {ERole} from '../../../../shared/model/role';

@Component({
    selector: 'form-template-form-builder',
    templateUrl: './template-FormBuilder-form.component.html'
})
export class TemplateFormBuilderFormComponent implements OnInit {

    @Input('recordObject') oldObject: ObjectTypes;        // Получаем
    @Output() onChanged = new EventEmitter<ObjectTypes>();  // Отправляем
    @Output('onCancel') cancelEvent = new EventEmitter<any>();  // Отправляем

    objectFormBuilder: FormGroup;
    roles = [ERole.USER, ERole.ADMIN, ERole.VISITOR];

    constructor(
        private fb: FormBuilder,
        private validate: FormValidationRegExService,
    ) {}

    ngOnInit() {
        this.objectFormBuilder = this.fb.group({
            firstName: [null, [
                this.validate.userName(),
                FormValidationService.cannotContainMinMaxLength,
                FormValidationService.cannotContainSeparatorName
            ]],
            age: [null, [
                Validators.required,
                Validators.pattern('[0-9]*'),
                Validators.min(15),
                Validators.max(50)
            ]],
            role: [null, Validators.required],
            authorization: this.fb.group({
                email: [null, this.validate.email()],
                password: [null, this.validate.password()],
            }),
            address: this.fb.array([]),
        });


        if (this.oldObject.address.length > 0) {
            this.addInput(this.oldObject.address.length);
        }


        /**
         * Разница между "setValue" и "patchValue" :
         * *  Используя "setValue" = Необходимо перечислить все элементы управления внутри метода.
         *    Если этого не сделать, вы получите ошибку.
         *  this.objectFormGroup.setValue({
         *     'firstName': this.oldObject.firstName,
         *     'lastName': this.oldObject.lastName
         *  });
         * *  Используя "patchValue" - Вы можете пропускать ети параметры
         *  this.objectFormGroup.patchValue({
         *    'firstName': this.oldObject.firstName,
         *  });
         */
        // this.objectFormGroup.setValue({
        //   'firstName': this.oldObject.firstName,
        // });
        this.objectFormBuilder.patchValue({...this.oldObject});
    }

    /**
     * Сохраняем изменения
     * @param {ObjectTypes} changedObject измененный отправим обратно
     */
    change(changedObject: ObjectTypes) {
        this.onChanged.emit(changedObject);
    }

    /**
     * Закрываем форму без изменений
     */
    cancelForm() {
        this.cancelEvent.emit('cancelForm');
    }


    /** * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * * * * * * * * РАБОТА С МАСИВОМ АДРЕСОВ * * * * * * * * *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     **/


    /**
     * Чтобы Неписать макароний-код, Укорачиваем записи
     * @returns {FormArray}
     */
    get addressFormArray(): FormArray {
        return this.objectFormBuilder.get('address') as FormArray;
    }


    /**
     * Описание полей в форме которые будем добавлять при необходимости
     * @returns {FormGroup}
     */
    private initAddress() {
        return this.fb.group({
            city: new FormControl('', [
                Validators.required,
                FormValidationService.cannotContainSeparatorName
            ]),
            street: new FormControl('', [
                Validators.required,
                this.validate.email()
            ]),
        });
    }


    /**
     * Добавление полей в масив.
     * В зависимости от количества раннее до бавленных в масив.
     * @param arrLength {number}
     */
    addInput(arrLength) {
        let iter = 0;
        do {
            this.addressFormArray.push(this.initAddress());

            iter++;
        } while (iter < Number(arrLength));
    }


    /**
     * Удаление поля из формы
     * @param i {number} порядкой номер в масиве поля который нужно удалить
     */
    removeInput(i) {
        this.addressFormArray.removeAt(i);
    }

}
