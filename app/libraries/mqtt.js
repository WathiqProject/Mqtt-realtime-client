
const amqpClient = require('amqplib/callback_api');
const config = require('../../config/config.js');


let channel;
amqpClient.connect(config.mqtt.default.host, function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    // var queue = 'hello';
    // var msg = 'Hello world';

    // channel.assertQueue(queue, {
    //   durable: false
    // });

    // channel.sendToQueue(queue, Buffer.from(msg));
    // console.log(" [x] Sent %s", msg);
    module.exports = channel;
  });
});

module.exports = channel;