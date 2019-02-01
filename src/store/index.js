import { CounterStore } from './counterStore';
import { BaseStore } from './baseStore';

export class RootStore {
    constructor() {
        this.CounterStore =  CounterStore;
        this.BaseStore =  BaseStore;
    }
}