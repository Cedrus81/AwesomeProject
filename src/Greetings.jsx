import { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
});

const Greeting = props => {
    return (
        <View style={styles.center}>
            <Text>Hello {props.name}! How are </Text>
        </View>
    );
};

const LotsOfGreetings = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={[styles.center, { top: 50 }]}>
            <Greeting name="Rexxar" />
            <Greeting name="Jaina" />
            <Greeting name="Valeera" />
            <Text>You've clicked {count} times</Text>
            <Button onPress={() => { setCount(count + 1) }} title="Greet me" />
        </View>
    );
};

export default LotsOfGreetings;