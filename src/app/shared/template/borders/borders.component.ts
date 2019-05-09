import {Component} from '@angular/core';

/**
 * Простой шаблон для визуального разделения тестовой формы.
 */
@Component({
  selector: 'template-borders',
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.styl'],
  inputs: ['title', 'description'] // чтобы не пистать через декоратор  @Input('titleInputs') titleVariable: string;
})
export class TemplateBordersComponent  {

  constructor() {}

}
