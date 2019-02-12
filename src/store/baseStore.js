import { observable, action, autorun } from 'mobx';

export const BaseStore = observable({
    name: 'lili',
    age: 20,
    number: 0,
    get getNum() {
        return this.number;
    },
    get labelText() {
        return `${this.name}:${this.age}`
    },
    setAge(age) {
        this.age = age;
    }
}, {
        setAge: action
    }
);
autorun(() => console.warn(BaseStore.labelText),{name:'NUM'});
BaseStore.increment = function () {
    this.number++;
}
BaseStore.decrement = function () {
    this.number--;
}

