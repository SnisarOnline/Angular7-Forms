import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {SimpleFormComponent} from './001_simple-form/simple-form.component';

const routes: Routes = [
    {path: '', component: TemplateDrivenFormComponent},
    {path: '001', component: SimpleFormComponent},
    {path: '002', component: SimpleFormComponent},
    {path: '003', component: SimpleFormComponent},

    {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormRoutingModule { }
