import {ERole} from './role';
import {IAuthorization} from './authorization';
import {IAddress} from './address';

/**
 * InterfaceForm
 * Интерфейс определяет свойства и методы, которые объект должен реализовать.
 */
export interface IForm {
    id: number;
    firstName: string;
    age?: number;
    role?: ERole;
    authorization?: IAuthorization;
    address?: IAddress[];
}

/**
 * ObjectForm
 * На основе етого класса можно создавать обьекты спомошью Interface етого не сделать
 */
export class OForm {
    constructor(public id: number,
                public firstName: string,
                public age?: number,
                public role?: ERole,
                public authorization?: IAuthorization,
                public address?: IAddress[]
    ) {}
}
