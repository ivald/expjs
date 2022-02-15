const express = require('express');

const app = express();

// setup the rotes
require('./routes')(app);

app.listen(process.env.PORT || '3000', () => {
  console.log(('running server on port ' + '3000'));
});

module.exports = app;
