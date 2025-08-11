import { Animated, Button, StyleSheet, TextInput } from 'react-native'
import CheckBox from './CheckBox'
import { useRef, useEffect, useState } from 'react'

const TodoItem = ({ item, removeTodo, toggleCompleted, editTodo }) => {
    const bgAnim = useRef(new Animated.Value(item.completed ? 1 : 0)).current
    const textColorAnim = useRef(new Animated.Value(item.completed ? 1 : 0)).current
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.text);
    useEffect(() => {
        Animated.timing(bgAnim, {
            toValue: item.completed ? 1 : 0,
            duration: 400,
            useNativeDriver: false,
        }).start()
        Animated.timing(textColorAnim, {
            toValue: item.completed ? 1 : 0,
            duration: 400,
            useNativeDriver: false,
        }).start()
    }, [bgAnim, item.completed, textColorAnim])

    const backgroundColor = bgAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#f9f9f9', '#4caf50'],
    })

    const textColor = textColorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#222', '#fff'],
    })

    return (
        <Animated.View style={[styles.container, { backgroundColor }]}>
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
                />
            ) : (
                <Animated.Text style={[styles.itemText, { color: textColor }]} onPress={() => setIsEditing(true)}>
                    {item.text}
                </Animated.Text>
            )}
            <Button title="X" onPress={() => removeTodo(item.id)} />
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
