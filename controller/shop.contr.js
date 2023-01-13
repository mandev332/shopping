import { fetch } from "../utils/pg.js";

const shop_contr = {
  GET: async (req, res) => {
    if (req.param) {
      let data = await fetch("SELECT * FROM shoppings where id = ?", req.param);
      console.log(data);
    }
  },
};

export { shop_contr };
