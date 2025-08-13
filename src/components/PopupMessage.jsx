import { Text, StyleSheet, Animated, useAnimatedValue } from 'react-native';
import { useRef, useEffect } from 'react';

const PopupMessage = ({ message, trigger, setTrigger }) => {
    const fadeAnim = useRef(useAnimatedValue(0)).current;
    const translateYAnim = useRef(useAnimatedValue(-20)).current;

    useEffect(() => {
        if (trigger === true) {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(translateYAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start(
                // Reset animations after they complete
                () => {
                    setTimeout(() => {
                        Animated.parallel([
                            Animated.timing(fadeAnim, {
                                toValue: 0,
                                duration: 200,
                                useNativeDriver: true,
                            }),
                            Animated.timing(translateYAnim, {
                                toValue: -20,
                                duration: 200,
                                useNativeDriver: true,
                            }),
                        ]).start(() => setTrigger(false));
                    }, 2000); // Hide after 2 seconds
                }
            );
        }
    }, [fadeAnim, setTrigger, translateYAnim, trigger]);

    return (
        <Animated.View style={[styles.popup, { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]}>
            <Text style={styles.text}>{message}</Text>
        </Animated.View>
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