const { response } = require('express');
const jwt = require('jsonwebtoken')

const jswValidator = (req, res = response, next) => {
    const token = req.header('x-token');

    if( !token ) {
        return res.status(401).json({
            ok: false,
            msg:'There is no token'
        })
    }

    try {
        
        const {uid, name} = jwt.verify(
            token, 
            process.env.SECRET_JWT_SEED,
        )

        req.uid = uid;
        req.name = name;

    } catch (error) {
        return response.status(401).json({
            ok: false,
            msg:'Not valid token'
        })
    }
    
    next();
}

module.exports = {
    jswValidator
}