export default {
  SELECT: "SELECT * FROM shopping where id=$1",
  SELECTALL: "SELECT * FROM shopping",
  INSERT:
    "INSERT INTO shopping ( name, adress,image, link, type_id, contact,loc_lat, loc_long, litsense) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *",
};
