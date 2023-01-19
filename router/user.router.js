import { user_contr } from "../controller/user.contr.js";
import { user } from "../middleware/user.js";
import { Router } from "express";

const user_router = new Router();

user_router
  .get("/user", user.LOGIN, user_contr.GET)
  .post("/register", user.UPLOAD, user.REGISTER, user_contr.POST)
  .post("/login", user.LOGIN, user_contr.POST)
  .put("/user", user.LOGIN, user.UPLOAD, user_contr.PUT)
  .delete("/user", user.LOGIN, user_contr.DELETE);

export { user_router };
