import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LotsOfGreetings from './Greetings';

const styles = StyleSheet.create({
    center: {}
})

const HelloWorldApp = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <LotsOfGreetings />
        </View>
    );
};
export default HelloWorldApp;