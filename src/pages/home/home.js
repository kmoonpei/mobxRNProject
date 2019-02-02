import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Button
} from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Counter from './../../components/Counter';
import HeaderBar from './../../common/HeaderBar';



@inject('CounterStore')
@observer
export default class Home extends Component {
    static params = {
        Image: require('../../assets/tabs/home.png'),
        msg: '圈子',
        header: null
    };
    static navigationOptions = ({ navigation, screenProps }) => HeaderBar(screenProps, Home.params);
    constructor(props) {
        super(props);
        this.goThings = this.goThings.bind(this);
    }

    componentDidMount() {
        console.warn('number:', this.props)
    }
    goThings() {
        let { navigate } = this.props.navigation;
        navigate('Things')
    }
    render() {
        return (
            <View style={styles.bg}>
                <Text>home</Text>
                <Button onPress={this.goThings} title={'go things page'} />
                <Counter />
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