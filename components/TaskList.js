import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react';

import { getTasks } from '../api'
import TaskItem from './TaskItem';

export default function TaskList() {

    const [refreshing, setRefreshing] = useState(false)
    const [tasks, setTasks] = useState({});

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data)
    }

    const deleteTask = async (id) => {
        fetch(`http://192.168.1.66:3001/${id}`, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        });
        await loadTasks();
    }

    useEffect(() => {
        loadTasks();
    }, [])

    const tasksArray = tasks.tasks

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    })

    return (
        <FlatList
            style={{ width: '100%' }}
            data={tasksArray}
            keyExtractor={(item) => item.id + ''}
            renderItem={({ item }) => {
                return <TaskItem task={item} deleteTask={deleteTask} />
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    color={["#78c08f"]}
                    onRefresh={onRefresh}
                />
            }
        />
    )
}
