export interface ICustomer {
    id: number;
    name: string;
}

export class Customer implements ICustomer {

    id: number;
    name: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    get $id() {
        return this.id;
    }

    get $name() {
        return this.name;
    }

    set $id(id: number) {
        this.id = id;
    }

    set $name(name: string) {
        this.name = name;
    }

    static of(json: any = {}) {
        return new Customer(json);
    }

    static empty() {
        return new Customer();
    }

    static fromJson(json: Array<any> = []) {

        const items: Array<ICustomer> = [];

        for (const values of json) {
            items.push(new Customer(values));
        }

        return items;
    }

}
