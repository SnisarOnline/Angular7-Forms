import {Component} from '@angular/core';

@Component({
    selector: 'templatedriven-style-class',
    templateUrl: './style-class.component.html',
    styles: [`
        .ng-touched.ng-valid[required] {
            border-bottom: 3px solid green;
        }

        .ng-invalid:not(form) {
            border-bottom: 3px solid red;
        }
    `]
})
export class StyleClassComponent {

    title = 'Style class';
    description = '';

    constructor() {}

}
