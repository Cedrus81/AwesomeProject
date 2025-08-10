import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

const TodoForm = ({ todoList, addTodo }) => {
    const [todoText, setTodoText] = React.useState('');
    const [error, setError] = React.useState('');

    const handleAdd = () => {
        const trimmed = todoText.trim();
        if (trimmed) {
            setError('Todo item cannot be empty');
            return
        }
        else if (todoList.some(todo => todo.text === trimmed)) {
            setError('Todo item already exists');
            return
        } else {
            addTodo([...todoList, { id: Date.now(), text: trimmed, completed: false }]);
            setError('');
            setTodoText('');
        }
    }

    return (
        <View>
            <Text style={styles.header}>Todo List!</Text>
            <Text>Add a new todo item:</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder="Enter todo item"
                    style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 10 }}
                    value={todoText}
                    onChangeText={setTodoText}
                />
                <Button
                    title="Add"
                    onPress={handleAdd}
                />
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}

        </View>
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
    }
})

export default TodoForm