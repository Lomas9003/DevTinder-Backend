const authMiddleware = (req, res, next) => {
  const token = "ghhgghhg",
    isUserAdmin = token === "xyz";

  if (!isUserAdmin) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  next();
};

const userMiddleware = (req, res, next) => {
  const token = "abc";
  const isUser = token === "abc";

  if (!isUser) {
    res.status(401).send("unauthorized");
  }

  next();
};

module.exports = { authMiddleware, userMiddleware };
