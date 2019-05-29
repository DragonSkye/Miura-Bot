
class Ping {

    constructor(client, message) {
        const m = message.channel.send("Ping?");
        message.channel.send(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

}

module.exports = Ping;
