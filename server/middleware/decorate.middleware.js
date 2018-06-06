const cors = require('cors');
const bodyParser = require('body-parser');
// const passport = require('../auth/local.auth');

function decorate(app) {

    app.use(bodyParser.json())
    app.use(cors());
    // app.use(passport.initialize());

    return app;
}

module.exports = decorate;