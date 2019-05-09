/**
 * InterfaceForm
 * Интерфейс определяет свойства и методы, которые объект должен реализовать.
 */
export interface IAuthorization {
    email: string;
    password: string;
}


/**
 * ObjectForm
 * На основе етого класса можно создавать обьекты спомошью Interface етого не сделать
 */
export class OAuthorization {
    constructor(
        public email: string,
        public password: string
    ) {}
}
