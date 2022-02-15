const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
  app.use(cors({
    origin: "*"
  }));
  app.use(bodyParser.json());
  app.get('/', (req, res) => { res.send('false') });
  app.use('/api/', require('./api/controller.routes'));
};
