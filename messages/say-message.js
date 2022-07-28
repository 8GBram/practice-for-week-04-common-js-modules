const needed = require("./hello-message");
const helloMessage = needed.helloMessage;

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);
exports.sayMessage = sayMessage;