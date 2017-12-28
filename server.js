const server = require('./index');

const PORT = 8015;

server.listen(PORT, () => {
  console.log('Portfolio site listening on port %s', PORT);
});
