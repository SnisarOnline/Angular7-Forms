import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TemplateDrivenFormRoutingModule} from './template-driven-form-routing.module';
import {SharedModule} from '../shared/shared.module';
import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {SimpleFormComponent} from './001_simple-form/simple-form.component';
import {StyleClassComponent} from './002_style-class/style-class.component';
import {ShowMsgErrorComponent} from './003_show-msg-error/show-msg-error.component';
import {ShowManyMsgsComponent} from './004_show-many-msgs/show-msg-error.component';
import {MsgFormInCodeComponent} from './005_msg-in-code/msg-form-in-code.component';

@NgModule({
    declarations: [
        TemplateDrivenFormComponent,
        SimpleFormComponent,
        StyleClassComponent,
        ShowMsgErrorComponent,
        ShowManyMsgsComponent,
        MsgFormInCodeComponent,
    ],
    imports: [
        CommonModule, FormsModule,
        TemplateDrivenFormRoutingModule,
        SharedModule,
    ]
})
export class TemplateDrivenFormModule {
}
