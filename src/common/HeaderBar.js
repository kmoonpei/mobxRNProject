import React, { Component } from 'react';
import {
    Platform,
    Text, Image,
    View
} from 'react-native';
import { Variables } from '../Variables';

let theme = Variables.theme;
export default function HeaderBar(screenProps = {}, params = {}, navigation = {}) {
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
        tabBarLabel: ({ focused, tintColor }) => (
            <Text style={[Variables.df, focused ? { color: theme.themeC } : { color: tintColor }]}>{params.msg}</Text>
        ),
        tabBarIcon: ({ focused, tintColor }) => (
            <Image source={params.Image}
                style={[focused ? { tintColor: theme.themeC } : { tintColor: tintColor }, Variables.icon]}
            />
        ),
        gesturesEnabled: params.isBack ? false : true,
    })
}
