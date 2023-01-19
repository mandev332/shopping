import sha256 from "sha256";
import { user_models } from "../models/user.model.js";
import { jwt } from "../utils/JWT.js";
import { fetch } from "../utils/pg.js";

const user_contr = {
  GET: async (req, res) => {
    try {
      const { id } = req.user;
      let data = await fetch(user_models.GET, id);
      if (data?.id) {
        delete data.password;
        res.send({
          status: 200,
          data,
          message: "user",
        });
      } else throw new Error(id + " - user not found!");
    } catch (err) {
      res.send({
        status: 404,
        data: null,
        message: err.message,
      });
    }
  },
  POST: async (req, res) => {
    try {
      if (!req.headers.token) {
        const { username, contact, link, image, password, role_id } = req.body;
        let addUser = await fetch(
          user_models.POST,
          username,
          contact,
          link,
          image,
          sha256(password),
          role_id
        );
        if (addUser instanceof Error) throw new Error(addUser.message);
        res.send({
          status: 200,
          data: jwt.SIGN({ token: addUser.id }),
          message: "Added user",
        });
      } else {
        const { username, password } = req.body;
        let user = await fetch(user_models.GET, req.user.id);
        if (username != user.username || sha256(password) != user.password)
          throw new Error("Wrong username or password!");
        else
          res.send({
            status: 200,
            data: jwt.SIGN({ token: user.id }),
            message: "Sign user",
          });
      }
    } catch (err) {
      res.send({
        status: 402,
        data: null,
        message: err.message,
      });
    }
  },
  PUT: async (req, res) => {
    try {
      let user = await fetch(user_models.GET, req.user.id);
      if (user?.id) {
        const { username, contact, link, image, password } = req.body;
        let changeuser = await fetch(
          user_models.PUT,
          user.id,
          username || user.username,
          contact || user.contact,
          link || user.link,
          image || user.image,
          sha256(password) || user.password
        );
        if (!changeuser.id) throw new Error(changeuser);
        res.send({
          status: 200,
          data: null,
          message: "Succsefully changed user - " + user.id + "!",
        });
      } else throw new Error(id + " - user not found!");
    } catch (error) {
      res.send({
        status: 404,
        data: null,
        message: error.message,
      });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { id } = req.user;
      if (!isNaN(+id)) {
        let data = await fetch(user_models.GET, id);
        if (!data?.id) throw new Error(id + " - user not found!");
        let user = await fetch(user_models.DELETE, id);
        res.send({
          status: 200,
          data: null,
          message: "Succsefully deleted user - " + user.id + "!",
        });
      }
    } catch (err) {
      res.send({
        status: 400,
        data: null,
        message: err.message,
      });
    }
  },
};

export { user_contr };
