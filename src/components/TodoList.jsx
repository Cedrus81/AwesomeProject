import { View, FlatList, StyleSheet, Button, useAnimatedValue } from 'react-native'
import CheckBox from './CheckBox'
import { Animated } from 'react-native'
import { useRef, useEffect } from 'react'
import { Text } from 'react-native'

const TodoList = ({ todoList, removeTodo, toggleCompleted }) => {

    if (!todoList || todoList.length === 0) {
        return <Text style={styles.emptyText}>Hurray! Nothing to do!</Text>
    }
    return (
        <View>
            <FlatList keyExtractor={item => item.id} data={todoList} renderItem={({ item }) => <TodoItem item={item} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />} />

        </View>
    )
}

const TodoItem = ({ item, removeTodo, toggleCompleted }) => {
    const bgAnim = useRef(useAnimatedValue(item.completed ? 1 : 0)).current
    const textColorAnim = useRef(useAnimatedValue(item.completed ? 1 : 0)).current

    useEffect(() => {
        Animated.timing(bgAnim, {
            toValue: item.completed ? 1 : 0,
            duration: 400,
            useNativeDriver: true,
        }).start()
        Animated.timing(textColorAnim, {
            toValue: item.completed ? 1 : 0,
            duration: 400,
            useNativeDriver: true,
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
            <CheckBox itemId={item.id} isCompleted={item.completed} toggleCompleted={toggleCompleted} />
            <Animated.Text style={[styles.itemText, { color: textColor }]}>
                {item.text}
            </Animated.Text>
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
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
    }
})

export default TodoList