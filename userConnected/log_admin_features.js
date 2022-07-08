

const {isTokenValid} = require('../utils')


const authenticateUser = async (req, res, next) => {
    const token = req.signedCookies.token;
  
    if (!token) {
        return res.status(404).send('Authentication Invalid');
    }
  
    try {
      const { name, userId, role } = isTokenValid({ token });
      req.user = { name, userId, role };
      next();
    } catch (error) {
        res.status(404).send('Authentication Invalid');
    }
  };

const authorizePermissions = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
       return res.status(404).send(
          'Unauthorized to access this route'
        );
      }
      next();
    };
  };

  module.exports = {
    authenticateUser ,
   authorizePermissions,
}

