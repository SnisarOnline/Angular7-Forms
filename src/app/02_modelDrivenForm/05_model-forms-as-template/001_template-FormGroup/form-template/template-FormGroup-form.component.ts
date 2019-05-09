import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {OForm as ObjectTypes} from '../../../../shared/model/ObjectTypes';
import {FormsValidationsService} from './form-validation-function.service';
import {ERole} from '../../../../shared/model/role';

@Component({
  selector: 'form-template-form-group',
  templateUrl: './template-FormGroup-form.component.html'
})
export class TemplateFormGroupFormComponent implements OnInit {

  @Input('recordObject') oldObject: ObjectTypes;        // Получаем
  @Output() onChanged = new EventEmitter<ObjectTypes>();  // Отправляем
  @Output('onCancel') cancelEvent = new EventEmitter<any>();  // Отправляем

  objectFormGroup: FormGroup;
  roles = [ERole.USER, ERole.ADMIN, ERole.VISITOR];

  constructor() {}

  ngOnInit() {
    this.objectFormGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        FormsValidationsService.cannotContainMinMaxLength,
        FormsValidationsService.cannotContainSeparatorName
      ]),
      age: new FormControl(null, [
        Validators.required, Validators.min(15), Validators.max(90)
      ]),
      authorization: new FormGroup({
          email: new FormControl('', [
              Validators.required,
              FormsValidationsService.cannotContainInvalidEmail
          ]),
          password: new FormControl('', [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(8)
          ]),
      }),
      address: new FormArray([])
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
    this.objectFormGroup.patchValue({...this.oldObject});
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
  get addressFormArray(): FormArray { return this.objectFormGroup.get('address') as FormArray; }


  /**
   * Описание полей в форме которые будем добавлять при необходимости
   * @returns {FormGroup}
   */
  private initAddress() {
      return new FormGroup({
          city: new FormControl('', [
              Validators.required,
              FormsValidationsService.cannotContainSeparatorName
          ]),
          street: new FormControl('', [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(8)
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
