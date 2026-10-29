import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Company } from '../entity/Company';
export const database = new DataSource({type:'postgres',url:process.env.DATABASE_URL,entities:[Company],synchronize:process.env.NODE_ENV !== 'production'});
export default { connectionPostgres: () => database.initialize() };
