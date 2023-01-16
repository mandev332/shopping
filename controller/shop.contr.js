import { fetch, fetchAll } from "../utils/pg.js";
import query from "../models/shopping.models.js";
const shop_contr = {
  GET: async (req, res) => {
    const { id } = req.params;
    if (!isNaN(+id)) {
      let data = await fetch(query.GET, id);
      res.send({
        status: 200,
        data,
        message: "shoping",
      });
    } else {
      let data = await fetchAll(query.GETALL);
      res.send({
        status: 200,
        data,
        message: "shoping",
      });
    }
  },
  POST: async (req, res) => {
    try {
      const { id } = req.user;
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
        query.POST,
        name,
        adress,
        image,
        link,
        type_id,
        contact,
        lat,
        long,
        litsense,
        id
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
  PUT: async (req, res) => {
    const { id } = req.params;
    const { name, adress, image, link, type_id, contact, lat, long, litsense } =
      req.body;
    if (!id) throw new Error("Which shopping do you change?");
    let shopping = await fetch(query.GET, id);

    if (shopping?.id) {
      let result = await fetch(
        query.PUT,
        id,
        name || shopping.name,
        adress || shopping.adress,
        image || shopping.image,
        link || shopping.link,
        type_id || shopping.type_id,
        contact || shopping.contact,
        lat || shopping.lat,
        long || shopping.long,
        litsense || shopping.litsense
      );
      if (result.severity == "ERROR") throw new Error(result.message);
      res.send({
        status: 200,
        data: null,
        message: "Changed SHOP " + id,
      });
    }
  },
};

export { shop_contr };
