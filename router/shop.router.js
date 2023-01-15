import { shop_contr } from "../controller/shop.contr.js";
import middleware from "../middleware/shopping.js";
import { Router } from "express";

const shop_router = new Router();

shop_router
  .get("/shop", shop_contr.GET)
  .get("/shop/:id", shop_contr.GET)
  .post("/shop", middleware.CHECK, shop_contr.POST);

export { shop_router };
