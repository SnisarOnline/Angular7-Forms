import {AbstractControl, ValidationErrors} from "@angular/forms";

/**
 * @whatItDoes Проверка валидации
 * в контруктор недобавляем.
 */
export class FormValidationService {

    /**
     * проверка на длину строки
     * @param {AbstractControl | string}  control  приходящие значения
     * @returns {ValidationErrors | null} возврат null или ValidationErrors
     */
  static cannotContainMinMaxLength(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null ) {
        const inputLength = (control.value as string).length;
        const searchErr = (inputLength <= 2) || (inputLength >= 60);
        if (!searchErr) {
            return null;
        }
    }
    return {cannotContainMinMaxLength: true};
  }

  /**
   * проверка Имени на символы /[_+-=.:,;!#$%^&*()[\]{}<>@"'`~?\\/| 0-9]/gi
   * @param control {string} приходящие значения
   * @returns {any} возврат null или ValidationErrors
   */
  static cannotContainSeparatorName(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null ) {
      const delimiter = /[ +=:;!#$%^&*()[\]{}<>@`~?\\/|0-9]/gi;
      const searchErr = (control.value as string).search(delimiter);
      if ( searchErr < 0) {
        return null;
      }
    }
    return {cannotContainSeparator: true};
  }

  /**
   * проверка Текста на символы /[_+=$^&*<>`~\\|]/gi
   * @param control {string} приходящие значения
   * @returns {any} возврат null или ValidationErrors
   */
  static cannotContainSeparatorText(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null ) {
        const delimiter = /[_+=#$%^&*<>`~\\|]/gi;
        const searchErr = (control.value as string).search(delimiter);
        if (searchErr < 0) {
            return null;
        }
    }
    return {cannotContainSeparator: true};
  }

  /**
   * проверка валидности email
   * @param control {string} входяший email
   * @returns {any}  true || null
   */
  static cannotContainInvalidEmail(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null ) {
        const emailDelimiter = /^[a-z]+[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/gi;
        const searchErr = (control.value as string).search(emailDelimiter);
        if (searchErr === 0) {
            return null;
        }
    }
    return {cannotContainInvalidEmail: true};
  }
}
