/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import TodoForm from './src/components/TodoForm';
import TodoList from './src/components/TodoList';
// import HelloWorldApp from './src/HelloWorld';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Learn React Native', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TodoForm todoList={todoList} addTodo={setTodoList} />
      <TodoList todoList={todoList} removeTodo={setTodoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
