import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CounterStore } from '../../store/counterStore';



export default class Things extends Component {
    static navigationOptions = {
        title: 'Things',
    };
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