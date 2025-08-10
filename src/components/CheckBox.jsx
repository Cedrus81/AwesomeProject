import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const CheckBox = ({ itemId, isCompleted, toggleCompleted }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => toggleCompleted(itemId)}
            activeOpacity={0.7}
        >
            <View style={[styles.box, isCompleted && styles.boxChecked]}>
                {isCompleted && <View style={styles.inner} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    box: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#888',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxChecked: {
        borderColor: '#4CAF50',
        backgroundColor: '#E8F5E9',
    },
    inner: {
        width: 12,
        height: 12,
        borderRadius: 3,
        backgroundColor: '#4CAF50',
    },
});

export default CheckBox;