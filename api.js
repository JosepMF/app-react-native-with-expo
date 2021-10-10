const API = 'http://192.168.1.66:3001/';

export const getTasks = async () => {
    const res = await fetch(API);
    return await res.json();
}

export const saveTask = async (newTask) => {
    fetch(API, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        });
}