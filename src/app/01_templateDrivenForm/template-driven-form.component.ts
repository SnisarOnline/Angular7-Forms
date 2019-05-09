import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.styl']
})
export class TemplateDrivenFormComponent {

  title = 'Template Driven Form';
  description = 'для работы с формами Импортим "FormsModule" в component.module.ts';

  constructor() { }

}
