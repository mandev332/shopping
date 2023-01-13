import { shop_contr } from "../controller/shop.contr.js";
import { Router } from "express";

const shop_router = new Router();
shop_router
  .get("/shoppings", shop_contr.GET)
  .get("/shoppings:id", shop_contr.GET);

export { shop_router };
