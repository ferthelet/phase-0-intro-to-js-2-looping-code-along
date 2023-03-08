// Code your solutions in this file
// js

function writeCards(name, event) {
  //returns an array of thank you messages for each name provided to the function
  const newMessages = []; // was not working, declaration was with {}
  for (let i = 0; i < name.length; i++) {
    newMessages[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
  }
  return newMessages;
}

const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");


