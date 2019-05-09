import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ApiService} from './services/_api.service';
import {EventService} from './services/_event.service';
import {LocalStorageService} from './services/_localStorage.service';
import {TemplateBordersComponent} from './template/borders/borders.component';
import {TemplateTodoListComponent} from './template/todo-list/todo-list.component';
import {FormValidationRegExService} from './services/formValidation/form-validation-RegEx.service';
import {RegexService} from './services/formValidation/regex.service';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './data';

@NgModule({
    declarations: [
        TemplateBordersComponent, TemplateTodoListComponent
        /*<!--
                TODO: Доделать Валидацию
                <a href="https://medium.com/@maks.zhitlov/reactive-forms-in-angular-2f8abe884f79#f5b4">Хорошая идея</a>
        -->*/
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        // HttpClientInMemoryWebApiModule.forRoot(
        //     InMemoryDataService, { dataEncapsulation: false }
        // )
    ],
    exports: [
        TemplateBordersComponent, TemplateTodoListComponent
    ],
    entryComponents: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ApiService,
                EventService,
                LocalStorageService,
                FormValidationRegExService, RegexService
            ],
        };
    }
}
