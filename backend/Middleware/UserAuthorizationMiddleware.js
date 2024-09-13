const userAuthorizationHandler = (...role) => {
    return (req, res, next) => {
        const userRole = req?.user?.role;

        if (!role.includes(userRole)) {
            console.log("ITS MEEEEEE")
            return res.status(403).json({
                status: false,
                message: "You don't have permission",
            });
        }
        next();
    };
};

// module.exports = userAuthorizationHandler;
module.exports = {
    userAuthorizationHandler: userAuthorizationHandler,
};
