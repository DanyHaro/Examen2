import { Pool } from 'pg'

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'laovejalola1',
    database: 'examen2',
    port: 5432
});