const logger = (req, res, next) => {
    console.log(`HTTP Method: ${req.method} - URL: ${req.url}`);
    next(); 
};

module.exports = logger;
