import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { OForm as ObjectTypes } from '../../model/ObjectTypes';

/**
 * Простой шаблон для вывода данных из каждой тестовой формы.
 */
@Component({
  selector: 'template-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl'],
})
export class TemplateTodoListComponent implements OnInit {

  arrayObject: ObjectTypes[] = [];

  @Input() title: string;
  @Input('addNewObject') newObject: ObjectTypes;
  @Input() submit = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    this.submit.subscribe(_ => {
      this.addInArray(this.newObject);
    });
  }


  /**
   * Удаление с масива
   * @param {ObjectTypes} del Удаляемый Обьект
   */
  onDelete(del: ObjectTypes) {
    this.arrayObject = this.arrayObject.filter(h => h !== del);
  }

  /**
   * Добавление в масив
   * @param {ObjectTypes} newTodo ссылка на обьект из формы
   */
  addInArray(newTodo: ObjectTypes) {
    // const copy = this.arrayObject.map(a => ({...a})); // поверхносное копирование масива обьектов(1 уровня)
    const copy = Object.assign({}, newTodo); // поверхностная копия обьекта (1 уровень вложенности)
    copy.id = this.arrayObject.length + 1;
    this.arrayObject.push(copy);
    console.log( 'list addInArray = ', this.arrayObject );
  }

}
