import { observable } from 'mobx';

export const BaseStore = observable({
    number: 0,
    get getNum() {
        return this.number;
    }
})
BaseStore.increment = function () {
    this.number++;
}
BaseStore.decrement = function () {
    this.number--;
}

