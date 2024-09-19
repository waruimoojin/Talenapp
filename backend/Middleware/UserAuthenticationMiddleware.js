const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const UserModel = require("../Model/UserModel");

exports.authenticateUser = async (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.log("HERE -> ");
        return res.status(401).send("Unauthorized User");
    }
    
    const token = authHeader.split(" ")[1];
    if (!token) {
        console.log("OK here then");
        return res.status(401).send("Unauthorized User");
    }
    
    try {
        const { ID, role } = jwt.verify(token, process.env.JWT_SECRET);
        console.log("TOKEN ->", token);
        console.log("ID -> ", ID);
        console.log("Role -> ", role);
    
        req.user = await UserModel.findOne({ _id: ID, role }).select("-password");
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send("Unauthorized User");
    }
    
};
