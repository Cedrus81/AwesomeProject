import { View, Text, StyleSheet, Animated } from 'react-native'

const AllDone = () => (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Animated.View style={styles.allDoneContainer}>
            <Text style={{ fontSize: 28, color: '#388e3c', fontWeight: 'bold', marginBottom: 10 }}>
                🎉 All done!
            </Text>
            <Text style={{ fontSize: 18, color: '#222', textAlign: 'center' }}>
                Hurray! Nothing to do!
            </Text>
        </Animated.View>
    </View>
)

const styles = StyleSheet.create({
    allDoneContainer: {
        backgroundColor: '#e0ffe0',
        padding: 30,
        borderRadius: 16,
        shadowColor: '#4caf50',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        alignItems: 'center',
    },
})

export default AllDone
