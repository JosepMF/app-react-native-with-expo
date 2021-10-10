import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function TaskItem({ task, deleteTask }) {

    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', { id: task.id })}>
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemTitle}>{task.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(task.id)}>
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        color: "#ffffff"
    },

    deleteButton: {
        backgroundColor: '#ee5253',
        borderRadius: 5,
        padding: 7
    }

})
