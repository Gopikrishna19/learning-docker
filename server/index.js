const express = require('express');
const {version} = require('../package');

const app = express();
const PORT = 8080;

app.get('*', (req, res) => {
  console.log('Handling', req.path);
  res.send('Hello world from openshift!');
});

app.listen(PORT, () => console.log(`
  Server version: ${version}
  Listening on port ${PORT}!
`));
