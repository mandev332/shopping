import { jwt } from "../utils/JWT.js";
import path from "path";
import fs from "fs";
import { user_models } from "../models/user.model.js";
import { fetch } from "../utils/pg.js";

const user = {
  LOGIN: async (req, res, next) => {
    let { token } = req.headers;
    if (jwt.VERIFY(token) instanceof Error)
      res.send({
        status: 401,
        data: null,
        message: "You unauthorization!",
        link: "/register",
      });
    else {
      req.user = { id: jwt.VERIFY(token).token.id };
      return next();
    }
  },
  REGISTER: async (req, res, next) => {
    try {
      const { username, contact, link, password } = req.body;
      if (!username.length || username.length > 20 || !isNaN(+username))
        throw new Error("inappropriate name to use!");
      if (!contact.length || contact.length != 13 || isNaN(+contact))
        throw new Error("inappropriate contact to use!");
      if (
        password.length < 4 ||
        password.length > 15 ||
        !/[A-Za-z]/.test(password) ||
        !/[@!#$^&*._%+-]/.test(password) ||
        !/[0-9]/.test(password)
      )
        throw new Error("inappropriate password to use!");
      if (link && link.length > 64)
        throw new Error("inappropriate link to use!");

      return next();
    } catch (error) {
      res.send({
        status: 404,
        data: null,
        message: error.message,
      });
    }
  },
  UPLOAD: async (req, res, next) => {
    const { file } = req.files;
    if (req.user?.id) {
      let user = await fetch(user_models.GET, req.user.id);
      fs.unlinkSync(path.join(process.cwd(), user.image));
    }
    let filePath = path.join(process.cwd(), "image", "users", file.name);
    req.body.image = "/image/users/" + file.name;
    file.mv(filePath);
    return next();
  },
};

export { user };
