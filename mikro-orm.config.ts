import { Migrator } from '@mikro-orm/migrations';
import { defineConfig } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { config } from "dotenv";
import * as process from 'node:process';

config();

export default defineConfig({
  entities: ['src/entities/*'],
  driver: PostgreSqlDriver,
  dbName: process.env.SQL_DATABASE,
  user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  host : process.env.SQL_HOST,
  driverOptions: {
    connection: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  },
  debug : true,
  extensions: [Migrator],
})