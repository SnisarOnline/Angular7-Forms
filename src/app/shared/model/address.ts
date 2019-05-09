
/**
 * InterfaceForm
 * Интерфейс определяет свойства и методы, которые объект должен реализовать.
 */
export interface IAddress {
    street: string;
    city: string;
}

/**
 * ObjectForm
 * На основе етого класса можно создавать обьекты спомошью Interface етого не сделать
 */
export class OAddress {
    constructor(
        public street: string,
        public city: string
    ) {}
}
