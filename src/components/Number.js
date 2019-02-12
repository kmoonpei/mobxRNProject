import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { observer, inject } from 'mobx-react';


@inject('BaseStore')
@observer export default class Num extends Component {
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
                <Text>Name:</Text>
                <TextInput
                    style={{ height: 40, borderColor: '#aaa', borderWidth: 1 }}
                    onChangeText={this.changeName}
                    value={BaseStore.name} />
                <Text>Age:</Text>
                <TextInput
                    style={{ height: 40, borderColor: '#aaa', borderWidth: 1 }}
                    onChangeText={this.changeAge}
                    keyboardType={'number-pad'}
                    value={BaseStore.age + ''} />
                <Text>Name:{BaseStore.name}</Text>
                <Text>Age:{BaseStore.age}</Text>
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
    changeName = (text) => {
        let { BaseStore } = this.props;
        BaseStore.name = text;
    }
    changeAge = (text) => {
        let { BaseStore } = this.props;
        BaseStore.setAge(Number(text))
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