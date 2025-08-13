import { Animated, Button, StyleSheet, TextInput, useAnimatedValue } from 'react-native'
import CheckBox from './CheckBox'
import { useRef, useEffect, useState } from 'react'

const TodoItem = ({ item, removeTodo, toggleCompleted, editTodo }) => {
    const bgAnim = useRef(useAnimatedValue(item.completed ? 1 : 0)).current
    const textColorAnim = useRef(useAnimatedValue(item.completed ? 1 : 0)).current
    const fadeInAnim = useRef(useAnimatedValue(0)).current
    const translateYAnim = useRef(useAnimatedValue(10)).current
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.text);
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeInAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false,
            }),
            Animated.timing(translateYAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false,
            })
        ]).start();
    }, [fadeInAnim, translateYAnim]);
    useEffect(() => {
        Animated.parallel([
            Animated.timing(bgAnim, {
                toValue: item.completed ? 1 : 0,
                duration: 400,
                useNativeDriver: false,
            }),
            Animated.timing(textColorAnim, {
                toValue: item.completed ? 1 : 0,
                duration: 400,
                useNativeDriver: false,
            })
        ]).start()
    }, [bgAnim, item.completed, textColorAnim])

    const backgroundColor = bgAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#f9f9f9', '#4caf50'],
    })

    const textColor = textColorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#222', '#fff'],
    })

    const handleRemove = () => {
        Animated.parallel([
            Animated.timing(translateYAnim, {
                toValue: 10,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(fadeInAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            })
        ]).start(() => {
            removeTodo(item.id);
        });
    }

    return (
        <Animated.View style={[styles.container, { backgroundColor, opacity: fadeInAnim, transform: [{ translateY: translateYAnim }] },]}>
            <CheckBox itemId={item.id} isCompleted={item.completed} toggleCompleted={toggleCompleted} isDisabled={isEditing} />
            {isEditing ? (
                <TextInput
                    style={{ fontSize: 18 }}
                    value={editText}
                    onChangeText={setEditText}
                    onBlur={() => {
                        editTodo(item.id, editText);
                        setIsEditing(false);
                    }}
                    autoFocus
                    accessibilityLabel="Edit todo text"
                    accessibilityHint="Edit this task"
                />
            ) : (
                <Animated.Text style={[styles.itemText, { color: textColor }]} onPress={() => setIsEditing(true)}>
                    {item.text}
                </Animated.Text>
            )}
            <Button title="X" onPress={handleRemove} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    itemText: {
        fontSize: 18,
    },
    button: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
})

export default TodoItem
