require('dotenv').config();
const express = require('express');
const server = express();
const path = require('path');

server.use(express.json());
server.use(express.static(
  path.join(__dirname, 'client/build')
));

server.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'client/build', 'index.html')
  );
});

server.get('/hello', (req, res) => {
  res.send('<h1>HELLO THERE!</h1>');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});