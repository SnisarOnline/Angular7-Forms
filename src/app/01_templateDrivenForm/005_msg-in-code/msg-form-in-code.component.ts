import {AfterViewInit, Component, EventEmitter, ViewChild} from '@angular/core';
import {OForm as ObjectTypes} from '../../shared/model/ObjectTypes';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'templatedriven-msg-form-incode',
    templateUrl: './msg-form-in-code.component.html',
    styles: [`
        .ng-valid[required] {
            border-bottom: 3px solid green;
        }

        .ng-invalid:not(form) {
            border-bottom: 3px solid red;
        }

        input[type=submit]:disabled, button:disabled {
            cursor: not-allowed;
        }
    `]
})
export class MsgFormInCodeComponent implements AfterViewInit {

    title = 'any msgs errors';
    roles = ['User', 'Admin', 'Anonymous'];
    objectSimpleForm: ObjectTypes;
    submit = new EventEmitter<boolean>();

    /**
     * Обьект с ошибками который будет выводится в интерфейсе
     * только те поля формы которые нужно проверять
     */
    formErrors = {
        firstName: '',
        age: '',
    };

    /**
     * Обьект с сообщениями ошибок
     */
    validationMessage = {
        firstName: {
            pattern: '[a-zA-Zа-яА-Я0-9]{2,}',
            required: 'Поле обязательно к заполнению',
        },
        age: {
            required: 'Вы забыли заполнить',
            minlength: 'Минимум 4 символа'
        }
    };

    /**
     * ViewChild - Используем для получения доступа к указанному компоненту и его методам
     * в круглых скобках шаблонная переменная(templateReferenceVariable) после скобок - Новое название переменной для компоненнта
     * с типизацией формы.
     */
    @ViewChild('userFormVal') userForm: NgForm;

    /**
     * Вызывается сразу после того, как Angular завершил обработку компонента.
     * Вызывается только Один раз, Когда создается экземпляр.
     *
     * Lifecycle Hooks
     * @Info https://angular.io/api/core/AfterViewInit
     */
    ngAfterViewInit() {
        this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }

    /**
     * Функция проверки валидации, и вывода ошибок
     * @param data
     */
    private onValueChanged(data?: any) {
        if (!this.userForm) { return; } // проверка наличия формы

        const form = this.userForm.form; // Обьект Формы с ключами из Названий полей

        // Переписываем обьект с ошибками И проходим по всем полям формы
        for (const field in this.formErrors) {
            this.formErrors[field] = ""; // затрем старые
            const control = form.get(field); // получим поле формы у которого потом будем искать ошибку

            // проверяем поле чтобы оно изменялось и было невалидным
            if (control && control.dirty && control.invalid) {
                const message = this.validationMessage[field];
                for (const key in control.errors) {
                    this.formErrors[field] += message[key] + ' ';
                }
            }
        }
    }

    constructor() {
        this.objectSimpleForm =  new ObjectTypes(0, '', 0, null, null, null);
    }

    createTasks() {
        this.submit.emit(true);
    }
}
