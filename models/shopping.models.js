export default {
  GET: "SELECT * FROM shopping where id = $1",
  GETALL: "SELECT * FROM shopping",
  POST: "INSERT INTO shopping ( name, adress, image, link, type_id, contact, loc_lat, loc_long, litsense, admin_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *",
  PUT: "UPDATE shopping set name = $2, adress = $3, image = $4, link = $5, type_id = $6, contact = $7, loc_lat = $8, loc_long = $9, litsense = $10 where id = $1 returning *",
};
