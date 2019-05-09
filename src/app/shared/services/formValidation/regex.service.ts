import { Injectable } from '@angular/core';

/**
 * @whatItDoes Регулярные выражения. / Regular expressions.
 * Из-за изменений в Validators.pattern from '@angular/forms'.
 * Регулярные выражения теперь нужно передавать как строки.
 */
@Injectable()
export class RegexService {

  // private nameRegex = '^([а-яА-Яa-zA-Z\\s]{2,})*$';
  private nameRegex = '^[а-яА-Яa-zA-Z\\s]*$';

  //// RFC 2822 compliant regex
  // private emailRegex = new RegExp(singleLineRegExp`
  //   ^(?!.*[\\s])[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*
  //   @(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$
  // `);
  private emailRegex = '^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\\.)+[a-z]{2,6}$';

  // at least one small letter, one big letter, one numeral, seven characters
  // минимум 7 значений из которых 1 Большая буква и 1 цифра
  // private passwordRegex = '^(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{7,}$';
  private passwordRegex = '[a-zA-Z0-9]{4,20}'; // от 4 до 20 букв и цифр

  // private emojiRegex = emojiRegex();
  private textRegex = '^([a-zA-Z0-9.:,-/]{3,})*$';

  private lastRouteRegex = /^.*\/(.*)$/g;
  // private lastRouteRegex = '^.*\\/(.*)$';


  get name(): string {
    return this.nameRegex;
  }

  get email(): string {
    return this.emailRegex;
  }

  get password(): string {
    return this.passwordRegex;
  }

  get text(): string {
    return this.textRegex;
  }
  // get emoji(): RegExp {
  //   return this.emojiRegex;
  // }

  get lastRoute(): RegExp {
    return this.lastRouteRegex;
  }

}
