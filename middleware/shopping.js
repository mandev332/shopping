import fs from "fs";
import path from "path";

export default {
  CHECK: async (req, res, next) => {
    try {
      const { file } = req.files;
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
      let fileExtname =
        "." + file.name.split(".")[file.name.split(".").length - 1];
      fs.exists(path.join(process.cwd(), "image", name), (exists) => {
        exists ? null : fs.mkdirSync(path.join(process.cwd(), "image", name));
      });
      setTimeout((res, rej) => {
        let filePath = path.join(
          process.cwd(),
          "image",
          name,
          name + fileExtname
        );
        file.mv(filePath);
      }, 2000);
      req.body.image = "/image/" + name + "/" + name + fileExtname;
      return next();
    } catch (error) {
      res.send({
        status: 404,
        data: {},
        message: error.message,
      });
    }
  },
};
