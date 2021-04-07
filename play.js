// PORT: 50542
// HOST: "135.23.222.131"
const connect = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = (key) => {
  if (key === '\u0003') {
  process.exit();
  }
};

const setupInput = function(data) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
}
setupInput();

