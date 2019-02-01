import { observable } from 'mobx';

export const CounterStore = observable({
    count: 0,
    get getCount() {
        return this.count;
    }
})
CounterStore.increment = function () {
    this.count++;
}
CounterStore.decrement = function () {
    this.count--;
}

// export class CounterStore {
//     constructor(rootStore) {
//         this.rootStore = rootStore;
//     }
//     @observable count = 0;

//     increment() {
//         this.count++;
//     }

//     decrement() {
//         this.count--;
//     }
// }

// export const CounterStore = new Counter();