import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react'

import Layout from '../components/Layout';
import { saveTask } from '../api'

export default function TaskFormScreen({ navigation, route }) {

    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const handlerInputChanged = (name, value) => {
        setTask({ ...task, [name]: value })
    }

    const handlerSubmit = () => {
        fetch('http://192.168.1.66:3001/', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        navigation.navigate("HomeScreen")
    }

    const handlerEdit = () => {
        fetch(`http://192.168.1.66:3001/${route.params?.id}`, {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        navigation.navigate("HomeScreen")
    }

    const styles = StyleSheet.create({
        input: {
            width: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            fontSize: 14,
            padding: 5,
            marginBottom: 7,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.3)',
            color: '#ffffff',
            textAlign: 'center'
        },
        buttonAddTask: {
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 5,
            marginBottom: 3,
            backgroundColor: '#10ac84',
            width: '90%',
        },
        buttonText: {
            color: '#ffffff',
            textAlign: 'center'
        }
    })

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Task Title"
                placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                onChangeText={(text) => handlerInputChanged('title', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Task description"
                placeholderTextColor={'#rgba(255, 255, 255, 0.3)'}
                onChangeText={(text) => handlerInputChanged('description', text)}
            />
            {!route.params?.id ? <TouchableOpacity style={styles.buttonAddTask} onPress={() => handlerSubmit()}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
                :
                <TouchableOpacity style={styles.buttonAddTask} onPress={() => handlerEdit()}>
                    <Text style={styles.buttonText}>Edit Task</Text>
                </TouchableOpacity>
            }
        </Layout>
    )

}
