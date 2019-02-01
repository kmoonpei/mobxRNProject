import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { observer, inject } from 'mobx-react';
// import { CounterStore } from '../store/counterStore';


@inject('CounterStore')
@observer export default class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { CounterStore } = this.props;
        return (
            <View style={styles.counter}>
                <Text>Counter:{CounterStore.count}</Text>
                <View style={styles.btns_wap}>
                    <View style={styles.btn_wap}>
                        <Button style={styles.btn} onPress={this.handleInc} title={'+'} />
                    </View>
                    <View style={styles.btn_wap}>
                        <Button style={styles.btn} onPress={this.handleDec} title={'-'} />
                    </View>
                </View>
            </View>
        )
    }
    handleInc = () => {
        let { CounterStore } = this.props;
        CounterStore.increment();
    }
    handleDec = () => {
        let { CounterStore } = this.props;
        CounterStore.decrement();
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        width: '50%',
    },
    btns_wap: {
        flexDirection: 'row',
    },
    btn_wap: {
        flex: 1,
        marginHorizontal: 10,
    },
    btn: {
        width: '100%',
    },
})