const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const UserModel = require("../Model/UserModel");

exports.authenticateUser = async (req, res, next) => {
    const token = req.signedCookies[process.env.COOKIE_NAME];
    console.log("COOKIE_NAME from .env:", process.env.COOKIE_NAME);
    console.log("Signed Cookies Received:", req.signedCookies);

    if (!token) {
        next(createHttpError(401, "Unauthorized User"));
    }
    try {
        const { ID, role } = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await UserModel.findOne({ _id: ID, role }).select(
            "-password"
        );
        next();
    } catch (error) {
        next(createHttpError(401, "Unauthorized User"));
    }
};
