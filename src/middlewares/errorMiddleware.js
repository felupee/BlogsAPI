const { INTERNAL_SERVER_ERROR, UNAUTHORIZED } = require('../statusCode');

module.exports = (err, _req, res, _next) => {
      if (err.status) {
        return res.status(err.status).json({ message: err.message });
      }

      console.log(err.message);
      return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
};