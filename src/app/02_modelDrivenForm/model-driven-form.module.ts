import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
// для работы с реактивными формами дополнительно Импортим "ReactiveFormsModule"
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModelDrivenFormRoutingModule } from './model-driven-form-routing.module';
import { SharedModule } from '../shared/shared.module';
import {ModelDrivenFormComponent} from './model-driven-form.component';
import {FormControlComponent} from './01_form-control/form-control.component';
import {FormsValidationsService} from './01_form-control/form-validation-function.service';
import {FormGroupComponent} from './02_form-group/form-group.component';
import {FormBuilderComponent} from './03_form-builder/form-builder.component';
import {FormControlAddOneComponent} from './04_dynamic-forms/001_form-control-add-one/001-form-control-add-one.component';
import {FormArrayAddOneComponent} from './04_dynamic-forms/002_form-array-add-one/002-form-array-add-one.component';
import {FormArrayAddGroupComponent} from './04_dynamic-forms/003_form-array-add-group/003_form-array-add-group.component';
import {TemplateFormGroupListComponent} from './05_model-forms-as-template/001_template-FormGroup/001_template-FormGroup-list.component';
import {TemplateFormGroupFormComponent} from './05_model-forms-as-template/001_template-FormGroup/form-template/template-FormGroup-form.component';
import {TemplateFormBuilderListComponent} from './05_model-forms-as-template/002_template-FormBuilder/002_template-FormBuilder-list.component';
import {TemplateFormBuilderFormComponent} from './05_model-forms-as-template/002_template-FormBuilder/form-template/template-FormBuilder-form.component';

@NgModule({
  declarations: [
    ModelDrivenFormComponent,
      FormControlComponent,
      FormGroupComponent,
      FormBuilderComponent,
      FormControlAddOneComponent,
      FormArrayAddOneComponent,
      FormArrayAddGroupComponent,
      TemplateFormGroupListComponent, TemplateFormGroupFormComponent,
      TemplateFormBuilderListComponent, TemplateFormBuilderFormComponent
  ],
  imports: [
    CommonModule,
    ModelDrivenFormRoutingModule,
      AccordionModule.forRoot(),
      FormsModule, ReactiveFormsModule,
      SharedModule,
  ],
  providers: [
      FormsValidationsService // Кастомный валидатор формы
  ]
})
export class ModelDrivenFormModule { }
