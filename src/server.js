import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import path from "path";
import { shop_router } from "../router/shop.router.js";
import { user_router } from "../router/user.router.js";
import errors from "../router/errors.js";
import "../utils/pg.js";
import "../config.js";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(process.cwd())));
app.use(cors({ "Access-Control-Allow-Origin": "*" }));
app.use(express.json());
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
app.use(shop_router);
app.use(user_router);
app.listen(PORT, console.log(`http://localhost:${PORT}`));
