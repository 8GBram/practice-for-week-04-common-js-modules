const needed = require("./../messages/say-message")
const sayMessage = needed.sayMessage;

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

exports.sayHelloTo = sayHelloTo;