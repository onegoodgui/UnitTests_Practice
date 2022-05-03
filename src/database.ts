import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
import pkg from "@prisma/client"; 

const { Pool } = pg;
export const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});


const { PrismaClient } = pkg;
export const client = new PrismaClient();