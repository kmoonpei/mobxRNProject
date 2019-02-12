import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Num from './../../components/Number';
import { inject, observer } from 'mobx-react';
import HeaderBar from './../../common/HeaderBar';

export default class About extends Component {

    static params = {
        Image: require('../../assets/tabs/about.png'),
        header: null
    };
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(screenProps, About.params, navigation);
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.bg}>
                <Text>About</Text>
                <Num />
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