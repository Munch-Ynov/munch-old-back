const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

module.exports = (req, res, next) => {
    try {
        const token = req.headers.cookie.split('=')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;
        req.auth = {
            userId: userId
        }
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch (err){
        res.status(401).json({message: "Invalid request, token is missing !"});
    }
}