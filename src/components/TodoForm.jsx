import { View, Text, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useRef, useState } from 'react'

const TodoForm = ({ todoList, addTodo }) => {
    const [todoText, setTodoText] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef(null);
    const handleAdd = () => {
        const trimmed = todoText.trim();
        if (todoList.some(todo => todo.text === trimmed)) {
            setError('Todo item already exists');
            return
        }
        if (!trimmed) {
            setError('Todo item cannot be empty');
            return
        }
        else {
            addTodo([...todoList, { id: Date.now(), text: trimmed, completed: false }]);
            setError('');
            setTodoText('');
        }
        Keyboard.dismiss(); // Dismiss keyboard
    }

    return (
        <TouchableWithoutFeedback
            onPressOut={() => {
                inputRef.current?.blur();
                Keyboard.dismiss();
            }}
        >
            <View>
                <Text style={styles.header}>Todo List!</Text>
                <Text>Add a new todo item:</Text>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Enter todo item"
                        style={styles.input}
                        value={todoText}
                        onChangeText={setTodoText}
                        ref={inputRef}
                        accessibilityLabel="Todo input"
                        accessibilityHint="Enter a new todo item"
                    />
                    <Button
                        title="Add"
                        onPress={handleAdd}
                        accessibilityLabel="Add todo"
                        accessibilityHint="Adds the entered todo to the list"
                    />
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    error: {
        color: 'red',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        flex: 1,
        marginRight: 10,
        borderRadius: 5,
    },
})

export default TodoForm