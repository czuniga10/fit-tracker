const userRouter = require('./user.router');
const projectRouter = require('./project.router');
const weekRouter = require('./week.router');



function delegateRoutes(app) {
    app.use('/api/user', userRouter);
    app.use('/api/project', projectRouter);
    app.use('/api/week', weekRouter);
    
    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });    
    
    return app;
}
module.exports = delegateRoutes;