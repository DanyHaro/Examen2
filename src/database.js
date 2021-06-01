import { Pool } from 'pg'

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'laovejalola1',
    database: 'crudjpa',
    port: 5432
});