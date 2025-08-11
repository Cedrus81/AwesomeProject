import { View, FlatList } from 'react-native'
import AllDone from './AllDone'
import TodoItem from './TodoItem'
const TodoList = ({ todoList, removeTodo, toggleCompleted, editTodo }) => {
    if (!todoList || todoList.length === 0) {
        return (
            <AllDone />
        )
    }
    return (
        <View>
            <FlatList keyExtractor={item => item.id}
                data={todoList}
                renderItem={({ item }) =>
                    <TodoItem item={item}
                        removeTodo={removeTodo}
                        toggleCompleted={toggleCompleted}
                        editTodo={editTodo}
                    />} />

        </View>
    )
}

export default TodoList