import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('BaseStore', 'CounterStore')
@observer
export default class Me extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);

    }
    render() {
        let { BaseStore, CounterStore } = this.props;
        return (
            <View style={styles.bg}>
                <Text>Me</Text>
                <Text>Counter:{CounterStore.count}</Text>
                <Text>Number:{BaseStore.number}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})