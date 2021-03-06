const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', () => {
    console.log('Connection is successfully established!');
    conn.write('Name: MHS')
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = connect;