import React, { Component } from 'react';
import Router from './app.router';
import { Provider } from 'mobx-react';
import NavigationStore from 'react-navigation-mobx-helpers';
import { RootStore } from '../store';

const store = new RootStore();
const rootNavigation = new NavigationStore();
export default class App extends Component {
    render() {
        return (
            <Provider rootNavigation={rootNavigation} {...store} >
                <Router />
            </Provider>
        )
    }
}