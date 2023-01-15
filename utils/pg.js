import pg from "pg";
import "../config.js";
const pool = new pg.Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DB,
  port: process.env.PG_PORT,
  password: process.env.PG_PASS,
});

async function fetchAll(query, ...params) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(query, params.length ? params : null);
    return rows;
  } catch (err) {
    return err;
  } finally {
    console.log("finally");
    client.release();
  }
}
async function fetch(query, ...params) {
  const client = await pool.connect();
  try {
    const {
      rows: [data],
    } = await client.query(query, params.length ? params : null);
    return data;
  } catch (err) {
    return err;
  } finally {
    console.log("finally");
    client.release();
  }
}

export { fetch, fetchAll };
