import express from "express";
import fileUpload from "express-fileupload";
import sha256 from "sha256";
import { shop_router } from "../router/shop.router.js";
import "../utils/pg.js";
import "../config.js";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(shop_router);
let str = "038f270ca678c66f5bf393f958e8eebcf98b049e5a0d32a69cabf46b576cabbf";
let stre = "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b";
console.log(str.length, sha256("1"));
app.listen(PORT, console.log(`http://localhost:${PORT}`));
