import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { RegexService } from './regex.service';

/**
 * @whatItDoes Проверка валидации по RegEx (регулярным выражениям)
 */
@Injectable()
export class FormValidationRegExService extends Validators {

  constructor(private regex: RegexService) {
    super();
  }

  userName(): ValidatorFn {
    return (control) => {
      const composedValidator = Validators.compose([
        Validators.required,
        Validators.pattern(this.regex.name),
      ]);

      return composedValidator(control);
    };
  }

  email(): ValidatorFn {
    return (control) => {
      const composedValidator = Validators.compose([
        Validators.required,
        Validators.pattern(this.regex.email),
      ]);

      return composedValidator(control);
    };
  }

  password(): ValidatorFn {
    return (control) => {
      const composedValidator = Validators.compose([
        Validators.required,
        Validators.pattern(this.regex.password),
      ]);

      return composedValidator(control);
    };
  }

  text(): ValidatorFn {
    return (control) => {
      const composedValidator = Validators.compose([
        Validators.required,
        Validators.pattern(this.regex.text),
      ]);

      return composedValidator(control);
    };
  }

  // getValidationErrorMessage(key: string): string {
  //   const errorMessage = this.translate.instant(`VALIDATION_ERRORS.${key.toUpperCase()}`);
  //
  //   if (errorMessage.includes('VALIDATION_ERRORS')) {
  //     return this.translate.instant(`VALIDATION_ERRORS.UNKNOWN`);
  //   } else {
  //     return errorMessage;
  //   }
  // }

}
