import React from 'react';
import {SttleSheet, Text, View } from 'react-native';

export default class Exercise extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Exercise Screen </Text>
            </View>
        );
    }
}

const styles = StylesSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});