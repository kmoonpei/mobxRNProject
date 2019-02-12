import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import HeaderBar from './../../common/HeaderBar';

@inject('BaseStore', 'CounterStore')
@observer
export default class Me extends Component {

    static params = {
        Image: require('../../assets/tabs/me.png'),
        msg: '圈子',
        header: null
    };
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(screenProps, Me.params, navigation);
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