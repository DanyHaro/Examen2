const jwt = require('jsonwebtoken');
const secret = 'without-access-token!';
const refreshToken = 'Secret-refresh-access-token';
module.exports = {
    checkToken: (req, res, next) => {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            const token = bearerToken;
            jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        success: 0,
                        message: "Invalid token"
                    });
                } else {
                    console.log(decoded, "TOKENNNN !!");
                    next();
                }
            });
        } else {
            res.status(401).json({
                success: 0,
                message: "Access denied unautorized user"
            });
        }
    }
}