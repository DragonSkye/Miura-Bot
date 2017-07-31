'use strict';

class Ping {

  constructor(message) {
    message.channel.send("pong!");
  }

}

module.exports = Ping;
