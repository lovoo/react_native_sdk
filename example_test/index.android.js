/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

var ReactNative = require('react-native');
var {
    NativeModules
} = ReactNative;
var module_test = NativeModules.AdjustTest;
import CommandExecutor from './CommandExecutor.js';
import { Adjust, AdjustEvent, AdjustConfig } from 'react-native-adjust';

export default class exampleProject extends Component {
    componentWillMount() {
        var baseUrl = 'https://10.0.2.2:8443';
        Adjust.setTestingMode(baseUrl);
        module_test.initTestSession(baseUrl, 
            function(className, methodName, jsonParams) {
                var params = JSON.parse(jsonParams);

                console.log('>> className: ' + className);
                console.log('>> methodName: ' + methodName);
                console.log('>> params: ' + params);

                CommandExecutor.executeCommand(className, methodName, params);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Example', () => exampleProject);
