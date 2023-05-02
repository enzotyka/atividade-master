import * as SQLite from 'expo-sqlite';

export default DatabaseConnetion = {
    getConnection: () => SQLite.openDatabase("database.db"),
};