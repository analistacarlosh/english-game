import React from 'react';
import {SttleSheet, Text, View } from 'react-native';

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Main Screen </Text>
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