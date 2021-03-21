import { createPool } from 'mysql2/promise';
import { PoolOptions } from 'mysql2/typings/mysql';
import dotenv from 'dotenv';
dotenv.config();

export default class Database{

    static settings : PoolOptions = {
        host        : process.env.HOST,
        port        : process.env.DB_PORT,
        user        : process.env.USER,
        password    : process.env.PASSWORD,
        database    : process.env.DATABASE
    };

    /**
     * 
     * @param {string} query A query string.
     * @returns {any} The query results.
     */
    static async runQuery(query: string): Promise<any>{
        const connection = await createPool(this.settings);
        const [ results ]: any = await connection.query(query);
        return results;
    }
}