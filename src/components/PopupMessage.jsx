import { View, Text, StyleSheet } from 'react-native';

const PopupMessage = ({ message }) => {
    return (
        <View style={styles.popup}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    popup: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        marginHorizontal: 20,
        backgroundColor: '#ff4444',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        zIndex: 100,
        elevation: 10,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default PopupMessage;