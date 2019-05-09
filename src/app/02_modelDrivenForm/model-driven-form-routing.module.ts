import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModelDrivenFormComponent} from './model-driven-form.component';

const routes: Routes = [
    {path: '', component: ModelDrivenFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenFormRoutingModule { }
