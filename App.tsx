/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TodoForm from './src/components/TodoForm';
import TodoList from './src/components/TodoList';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Learn React Native', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);
  const removeTodo = (id: any) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };
  const editTodo = (id: any, newText: string) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };
  const toggleCompleted = (id: any) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TodoForm todoList={todoList} addTodo={setTodoList} />
        <TodoList
          editTodo={editTodo}
          todoList={todoList}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBlock: 30,
    marginHorizontal: 10,
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
  },
});
export default App;
