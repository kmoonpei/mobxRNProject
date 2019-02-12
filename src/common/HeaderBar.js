import React, { Component } from 'react';
import {
    Platform,
    Text, Image,
    View
} from 'react-native';
import { Variables } from '../Variables';

let theme = Variables.theme;
export default function HeaderBar(screenProps = {}, params = {}, navigation = {}) {
    const { routeName } = navigation.state;
    return ({
        title: params.title,
        header: params.header,
        headerRight: params.header_right,
        headerLeft: params.header_left,
        headerTitleStyle: {
            color: theme.hdtxt,
        },
        headerStyle: {
            backgroundColor: theme.themeC,
        },
        headerTintColor: theme.hdtxt,
        gesturesEnabled: params.isBack ? false : true,
    })
}
