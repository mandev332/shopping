let user_models = {
  GET: "SELECT * FROM users where id=$1",
  GETALL: "SELECT * FROM users",
  POST: "INSERT INTO users ( username, contact, link, image, password, role_id) VALUES ($1,$2,$3,$4,$5,$6) returning id",
  PUT: "UPDATE users set  username = $2, contact = $3, link = $4, image = $5, password = $6 where id = $1 returning id",
  DELETE: "",
};

export { user_models };
