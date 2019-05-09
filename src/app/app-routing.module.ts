import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateDrivenFormModule} from './01_templateDrivenForm/template-driven-form.module';
import {ModelDrivenFormModule} from './02_modelDrivenForm/model-driven-form.module';

const routes: Routes = [
    {
        path: 'templateDrivenForm',
        loadChildren: () => TemplateDrivenFormModule  , // пример нового подключения если ошибка то ...
        // loadChildren: './01_templateDrivenForm/template-driven-form.module#TemplateDrivenFormModule', // старый проверенный способ
    },
    {
        // path: 'modelDrivenForm',
        path: 'reactiveForms',
        // loadChildren: () => ModelDrivenFormModule ,
        loadChildren: './02_modelDrivenForm/model-driven-form.module#ModelDrivenFormModule',
    },
    // { path: '**', redirectTo: 'modelDrivenForm' }
    { path: '**', redirectTo: 'reactiveForms' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
