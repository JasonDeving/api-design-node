const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const jsonData = { count: 12, message: 'hey' };

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/data', (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
