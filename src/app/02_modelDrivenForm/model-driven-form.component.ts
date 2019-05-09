import { Component } from '@angular/core';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.styl']
})
export class ModelDrivenFormComponent {

  titlePage = ` <a href="https://angular.io/guide/reactive-forms#reactive-forms"> Model Driven Form || Reactive Forms </a> `;
  descriptionPage = 'для работы с реактивными формами дополнительно Импортим "ReactiveFormsModule" в component.module.ts';

  constructor() { }

}
