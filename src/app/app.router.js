// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import Me from './../pages/me/me';
import About from './../pages/about/about';
import Home from './../pages/home/home';
import { Variables } from './../Variables';
import Things from './../pages/home/things';

const HomeStack = createStackNavigator({
    Home: Home,
    Things: Things,
});
const AboutStack = createStackNavigator({
    About: About,
});
const MeStack = createStackNavigator({
    Me: Me,
});
const bottomNav = createBottomTabNavigator(
    {
        Home: HomeStack,
        About: AboutStack,
        Me: MeStack
    },
    {
        // defaultNavigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let uri = '';
        //         if (routeName === 'Home') {
        //             uri = require('../assets/tabs/home.png');
        //         } else if (routeName === 'About') {
        //             uri = require('../assets/tabs/about.png');
        //         } else if (routeName === 'Me') {
        //             uri = require('../assets/tabs/me.png');
        //         }
        //         return <Image style={{ width: 25, height: 25, tintColor: focused ? '#f00' : tintColor }} source={uri} />;
        //     },
        // }),
        tabBarOptions: {
            activeTintColor: '#f00',
            inactiveTintColor: 'gray',
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            showLabel: true,
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                borderTopColor: '#e0e0e0',
                borderTopWidth: 1,
            },
            labelStyle: {
                fontSize: 14, // 文字大小
            },
        },
    }
);

export default createAppContainer(bottomNav);