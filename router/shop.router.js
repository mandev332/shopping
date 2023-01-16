import { shop_contr } from "../controller/shop.contr.js";
import middleware from "../middleware/shopping.js";
import { Router } from "express";
import { user } from "../middleware/user.js";

const shop_router = new Router();

shop_router
  .get("/shop", shop_contr.GET)
  .get("/shop/:id", shop_contr.GET)
  .post(
    "/shop",
    user.LOGIN,
    middleware.CHECK,
    middleware.UPLOAD,
    shop_contr.POST
  )
  .put(
    "/shop/:id",
    user.LOGIN,
    middleware.CHECK,
    middleware.UPLOAD,
    shop_contr.PUT
  );

export { shop_router };
