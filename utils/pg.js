import pg from "pg";
import "../config.js";
const pool = new pg.Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DB,
  port: process.env.PG_PORT,
  password: process.env.PG_PASS,
});

async function fetch(query, ...params) {
  try {
    const client = new pool();
    const { rows } = await client.query(query, params.length ? params : null);
    return rows;
  } catch (err) {
    return err.message;
  } finally {
    console.log("finally");
  }
}

export { fetch };
