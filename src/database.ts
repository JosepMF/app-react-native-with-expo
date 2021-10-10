import { createPool } from 'mysql2/promise';

export async function connect() {
    return await createPool({
        host: 'localhost',
        database: 'tasks-app-react-native',
        user: 'root',
        connectionLimit: 30
    });
}