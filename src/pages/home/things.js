import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CounterStore } from '../../store/counterStore';
import HeaderBar from './../../common/HeaderBar';


export default class Things extends Component {
    static params = {
        title: 'Things',
    };
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(screenProps, Things.params);
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.bg}>
                <Text>Counter:{CounterStore.count}</Text>
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