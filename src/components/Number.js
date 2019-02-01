import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { observer, inject } from 'mobx-react';


@inject('BaseStore')
@observer export default class Number extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { BaseStore } = this.props;
        return (
            <View style={styles.Number}>
                <Text>Number:{BaseStore.number}</Text>
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
        let { BaseStore } = this.props;
        BaseStore.increment();
    }
    handleDec = () => {
        let { BaseStore } = this.props;
        BaseStore.decrement();
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Number: {
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