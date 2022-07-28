const needed = require("./say-hello-to");
const sayHelloTo = needed.sayHelloTo;

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");
exports.giveMessageToMrsPotato = giveMessageToMrsPotato;
