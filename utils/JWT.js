import JWT from "jsonwebtoken";

const jwt = {
  SIGN: (token) => {
    try {
      return JWT.sign(token, process.env.SECRET_KEY);
    } catch (err) {
      return err;
    }
  },
  VERIFY: (token) => {
    try {
      return JWT.verify(token, process.env.SECRET_KEY);
    } catch (err) {
      return err;
    }
  },
};

export { jwt };
