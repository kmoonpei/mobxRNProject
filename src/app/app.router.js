// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import Me from './../pages/me/me';
import About from './../pages/about/about';
import Home from './../pages/home/home';
import { Variables } from './../Variables';
import Things from './../pages/home/things';

const HomeStack = createStackNavigator({ Home: Home, Things: Things });
HomeStack.navigationOptions = ({ navigation }) => stackConfig(navigation, {
    label: '主页',
    icon: require('../assets/tabs/home.png')
});

const AboutStack = createStackNavigator({ About: About });
AboutStack.navigationOptions = ({ navigation }) => stackConfig(navigation, {
    label: '关于',
    icon: require('../assets/tabs/about.png')
});

const MeStack = createStackNavigator({ Me: Me });
MeStack.navigationOptions = ({ navigation }) => stackConfig(navigation, {
    label: '我的',
    icon: require('../assets/tabs/me.png')
});

const stackConfig = (navigation, conf) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
        return { tabBarVisible }
    } else {
        return {
            tabBarLabel: conf.label,
            showIcon: true,
            tabBarIcon: ({ tintColor, focused }) => {
                return <Image style={{ width: 25, height: 25, tintColor: focused ? '#f00' : tintColor }} source={conf.icon} />
            },
            tabBarVisible
        }
    }
}

const bottomNav = createBottomTabNavigator({
    Home: HomeStack,
    About: AboutStack,
    Me: MeStack
}, {
        animationEnabled: false, // 切换页面时是否有动画效果
        lazy: true,
        swipeEnabled: true, // 是否可以左右滑动切换tab
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#f00',
            inactiveTintColor: 'gray',
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            showLabel: true,
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                borderTopColor: '#e0e0e0',
                borderTopWidth: 1
            },
            labelStyle: {
                fontSize: 14, // 文字大小
            }
        }
    });

export default createAppContainer(bottomNav);