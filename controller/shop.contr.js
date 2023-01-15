import { fetch, fetchAll } from "../utils/pg.js";
import query from "../models/shopping.models.js";

const shop_contr = {
  GET: async (req, res) => {
    const { id } = req.params;
    if (!isNaN(+id)) {
      let data = await fetch(query.SELECT, id);
      res.send({
        status: 200,
        data,
        message: "shoping",
      });
    } else {
      let data = await fetchAll(query.SELECTALL);
      res.send({
        status: 200,
        data,
        message: "shoping",
      });
    }
  },
  POST: async (req, res) => {
    try {
      const {
        name,
        adress,
        image,
        link,
        type_id,
        contact,
        lat,
        long,
        litsense,
      } = req.body;
      let result = await fetch(
        query.INSERT,
        name,
        adress,
        image,
        link,
        type_id,
        contact,
        lat,
        long,
        litsense
      );
      if (result.severity == "ERROR") throw new Error(result.message);
      res.send({
        status: 200,
        data: null,
        message: "Added SHOP " + name,
      });
    } catch (error) {
      res.send({
        status: 500,
        data: null,
        message: error.message,
      });
    }
  },
  PUT: async (req, res) => {},
};

export { shop_contr };
