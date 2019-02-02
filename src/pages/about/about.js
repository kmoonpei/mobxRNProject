import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Number from './../../components/Number';
import { inject, observer } from 'mobx-react';
import HeaderBar from './../../common/HeaderBar';

export default class About extends Component {

    static params = {
        Image: require('../../assets/tabs/about.png'),
        msg: '圈子',
        header: null
    };
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(screenProps, About.params);
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.bg}>
                <Text>About</Text>
                <Number />
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