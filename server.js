'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const { clients } = require('./data/clients');
const { getAllClients, getClientId, addNewClient, deleteClient } = require('./handlers/clientHandlers');
const { returnWordObject, getWord, handleGuess } = require('./handlers/hangmanHandlers');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

  .get('/clients', getAllClients)

  .get('/clients/:id', getClientId)

  .post('/clients/:id', addNewClient)

  .delete('/clients/:id', deleteClient)

  .get('/hangman/word/:id', returnWordObject)

  .get('/hangman/word', getWord)

  .get('/hangman/guess/:id/:letter', handleGuess)

  .listen(8000, () => console.log(`Listening on port 8000`));
