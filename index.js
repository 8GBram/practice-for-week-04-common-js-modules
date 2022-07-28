
// Your code here
const messages = require("./messages/index");
const msg1 = messages.m1;
const msg2 = messages.m2;
const msg3 = messages.m3;

const need1 = require("./send-messages/give-message-to-mrs-potato");
const giveMessageToMrsPotato = need1.giveMessageToMrsPotato;

const need2 = require("./send-messages/say-hello-to");
const sayHelloTo = need2.sayHelloTo;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);