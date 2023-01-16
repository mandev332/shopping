import query from "../models/shopping.models.js";
import fs from "fs";
import path from "path";
import { fetch } from "../utils/pg.js";

export default {
  CHECK: async (req, res, next) => {
    try {
      const { name, contact, adress, link, litsense } = req.body;
      if (!name.length || name.length > 32 || !isNaN(+name))
        throw new Error("inappropriate name to use!");
      if (!adress.length || adress.length > 1024 || !isNaN(+adress))
        throw new Error("inappropriate adress to use!");
      if (!contact.length || contact.length != 13 || isNaN(+contact))
        throw new Error("inappropriate contact to use!");
      if (link && link.length > 64)
        throw new Error("inappropriate link to use!");
      if (litsense && litsense.length > 32)
        throw new Error("inappropriate litsense to use!");

      return next();
    } catch (error) {
      res.send({
        status: 404,
        data: {},
        message: error.message,
      });
    }
  },
  UPLOAD: async (req, res, next) => {
    const { file } = req.files;
    const id = req.params?.id;
    let shop = req.body;
    if (id) {
      shop = await fetch(query.GET, id);
      if (!shop?.id) throw new Error("Which shopping do you change?");
      let r = fs.unlinkSync(path.join(process.cwd(), shop.image));
    }
    let fileExtname =
      "." + file.name.split(".")[file.name.split(".").length - 1];
    fs.exists(path.join(process.cwd(), "image", shop.name), (exists) => {
      exists
        ? null
        : fs.mkdirSync(path.join(process.cwd(), "image", shop.name));
    });
    setTimeout((res, rej) => {
      let filePath = path.join(
        process.cwd(),
        "image",
        shop.name,
        shop.name + fileExtname
      );
      file.mv(filePath);
    }, 2000);
    req.body.image = "/image/" + shop.name + "/" + shop.name + fileExtname;
    return next();
  },
};
