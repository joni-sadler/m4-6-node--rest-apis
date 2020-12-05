const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...

const getAllClients = (req, res) => {
  res.status(200).json({
    status: 200,
    clients: clients,
  });
}
  

const getClientId = (req, res) => {
  let clientId = req.params.id;
  let selectedClient = clients.filter((client) => clientId === client.id);
  
  if (selectedClient.length > 0) {
    res.status(200).json({
      status: 200,
      client: selectedClient,
    })
  } else {
    res.status(404).json({
      status: 404,
      client: "Client not found.",
    })
  }
}

const addNewClient = (req, res) => {
  let newClient = {
    id: uuidv4(),
    isActive: req.body.isActive,
    age: req.body.age,
    name: req.body.name,
    gender: req.body.gender,
    company: req.body.company,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  }

  let existingClient = clients.filter((client) => client.email === newClient.email)

  if (existingClient.length === 0) {
    newClient.id = uuidv4();
    clients.push(newClient);
    res.status(200).json({
      status: 200,
      client: newClient, 
    })
  } else {
    res.status(400).json({
      status: 400,
      client: "Client is already in database.",
    })
  }
}

const deleteClient = (req, res) => {
  let clientId = req.params.id;
  let selectedClient = clients.filter((client) => clientId === client.id);

  if (selectedClient.length  === 1) {
    let remainingClients = clients.filter((client) => clientId !== client.id)
    res.status(200).json({
      status: 200, 
      clients: remainingClients,
    })
  } else {
    res.status(400).json({
      status: 400,
      clients: "Client is not in database.",
    })
  }
}

module.exports = { getAllClients, getClientId, addNewClient, deleteClient }
