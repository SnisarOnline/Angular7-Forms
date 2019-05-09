import {Component} from '@angular/core';
import {IForm as ObjectTypes} from '../../../shared/model/ObjectTypes';
import {ERole} from '../../../shared/model/role';

@Component({
    selector: 'template-form-builder-list',
    templateUrl: './002_template-FormBuilder-list.component.html',
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
export class TemplateFormBuilderListComponent {
    title = 'model-forms as template FormBuilder';
    arrayObject: ObjectTypes[] = [
        {
            id: 0,
            firstName: 'Hacker',
            age: 10,
            role: null,
            authorization: {
                email: 'Hacker',
                password: 'Hacker'
            },
            address: []
        },
        {
            id: 1,
            firstName: 'ADMIN',
            age: 20,
            role: ERole.ADMIN,
            authorization: {
                email: 'email@email.com',
                password: 'password'
            },
            address: [
                {
                    city: 'City 1',
                    street: 'Street 1'
                }
            ]
        },
        {
            id: 2,
            firstName: 'USER',
            age: 45,
            role: ERole.USER,
            authorization: {
                email: 'email@email.com',
                password: 'password'
            },
            address: [
                {
                    city: 'City 1',
                    street: 'Street 1'
                },
                {
                    city: 'City 2',
                    street: 'Street 2'
                }
            ]
        },
        {
            id: 3,
            firstName: 'VISITOR',
            age: 60,
            role: ERole.VISITOR,
            authorization: {
                email: 'email@email.com',
                password: 'password'
            },
            address: [
                {
                    city: 'City 1',
                    street: 'Street 1'
                },
                {
                    city: 'City 2',
                    street: 'Street 2'
                },
                {
                    city: 'City 3',
                    street: 'Street 3'
                }
            ]
        }
    ];
    recordIndex = null;

    constructor() {}

    /**
     * Удаление с масива
     * @param {OForm} del Удаляемый Обьект
     */
    onDelete(del: ObjectTypes) {
        this.arrayObject = this.arrayObject.filter(h => h !== del);
    }

    /**
     * Заменна в масиве / переписывание обьекта
     * @param {OForm} newTodo ссылка на обьект из формы
     */
    addInArray(newTodo: ObjectTypes) {
        this.arrayObject[this.recordIndex] = newTodo;
        this.recordIndex = null;
    }

    /**
     * Открываем Форму для редактирования
     * @param INDEX выбранный из масива елемент
     */
    changes(INDEX) {
        this.recordIndex = INDEX;
    }

    cancel() {
        this.recordIndex = null;
    }
}
