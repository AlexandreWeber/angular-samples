export interface IAction {
    id: number;
    name: string;
}

export class Action implements IAction {

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
        return new Action(json);
    }

    static empty() {
        return new Action();
    }

    static fromJson(json: Array<any> = []) {

        const items: Array<IAction> = [];

        for (const values of json) {
            items.push(new Action(values));
        }

        return items;
    }

}
