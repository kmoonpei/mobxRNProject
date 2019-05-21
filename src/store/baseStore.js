import { observable, action, autorun, intercept, runInAction, flow } from 'mobx';

export const BaseStore = observable({
    name: 'lili',
    age: 0.5,
    number: 2,
    get getNum() {
        return this.number;
    },
    get labelText() {
        return `${this.name}:${this.age}`
    },
    get total() {
        return this.number * this.age;
    },
    setAge(age) {
        this.age = age;
    },
    fetchSomething() {
        // setTimeout(function () { this.name = 'fetchName' }, 5000)//错误写法,因为动作只会应用于当前栈

        setTimeout(() => { this.name = 'fetchName' }, 500)
    },
    // fecthCont() {
    //     prom().then(
    //         action('fetchSuccess', data => {
    //             this.number = data;
    //             console.warn('succes data:', data)
    //         }),
    //         action('fetchError', err => {
    //             this.number = 0;
    //             console.warn('err data:', err)
    //         })
    //     )
    // },
    // fecthCont() {
    //     prom().then(
    //         data => {
    //             runInAction(() => {//runInAction是action的语法糖
    //                 this.number = data;
    //             })
    //         },
    //         err => {
    //             runInAction(() => {
    //                 this.number = err;
    //             })
    //         }
    //     )
    // },
    // async fecthCont() {
    //     try {
    //         let data = await prom();
    //         runInAction(() => {
    //             this.number = data;
    //         })
    //     } catch (err) {
    //         runInAction(() => {
    //             this.number = err;
    //         })
    //     }
    // }
}, {
        setAge: action,
        fetchSomething: action,
        // fecthCont: action
    }
);
// BaseStore.handler = autorun(() => console.warn(BaseStore.labelText));
// BaseStore.handler();
BaseStore.increment = function () {
    this.number++;
}
BaseStore.decrement = function () {
    this.number--;
}
BaseStore.fecthCont = flow(function* () {//使用flow可以不用@action和runInAction包装一不调用行动
    try {
        let data = yield prom();
        this.number = data;
    } catch (err) {
        this.number = err;
    }
})
//拦截器
const disposer = intercept(BaseStore, 'name', change => {
    if (change.newValue.length >= 5) {
        change.newValue = change.newValue.slice(0, 5);
        return change;
    } else {
        return change;
    }
})

//这个prom一开始就运行结束了
// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let cont = 20;
//         cont = Math.random() * 10;
//         console.warn(cont);
//         if (cont >= 5) {
//             resolve(cont);
//         } else {
//             reject(cont)
//         }
//     }, 100);
// })

//这个prom函数调用一次执行一次
function prom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cont = 20;
            cont = Math.random().toFixed(1) * 10;
            if (cont >= 5) {
                resolve(cont);
            } else {
                reject(cont)
            }
        }, 100);

    })
}
