export interface IDepartment {
    id: number;
    name: string;
}

export class Department implements IDepartment {

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
        return new Department(json);
    }

    static empty() {
        return new Department();
    }

    static fromJson(json: Array<any> = []) {

        const items: Array<IDepartment> = [];

        for (const values of json) {
            items.push(new Department(values));
        }

        return items;
    }

}
