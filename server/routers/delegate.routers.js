const userRouter = require('./user.router');

function delegateRoutes(app) {
    app.use('/api/user', userRouter);
    
    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });    
    
    return app;
}
module.exports = delegateRoutes;