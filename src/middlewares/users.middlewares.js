const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

module.exports = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).send('Access refusé. Aucun token fourni.')
        }

        console.log(token);

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.id;
        if (!userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch (err){
        res.status(401).json({message: "Invalid request, token is missing !"});
    }
}