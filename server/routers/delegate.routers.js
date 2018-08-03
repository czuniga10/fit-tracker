const userRouter = require('./user.router');
const projectRouter = require('./project.router');
const workoutRouter = require('./workout.router');
const exerciseRouter = require('./exercise.router');
const setRouter = require('./set.router');




function delegateRoutes(app) {
    app.use('/api/user', userRouter);
    app.use('/api/project', projectRouter);
    app.use('/api/workout', workoutRouter);
    app.use('/api/exercise', exerciseRouter);
    app.use('/api/set', setRouter);
    
    
    
    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });    
    
    return app;
}
module.exports = delegateRoutes;