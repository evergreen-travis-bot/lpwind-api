'use strict'

const createStream = require('./req-stream')

function createClient (opts) {
  const client = createStream(opts)

  client.sails = {
    used: client.bind(client, {path: 'windsurf/velas-usadas-windsurf'}),
    new: client.bind(client, {path: 'windsurf/velas-windsurf'})
  }

  client.boards = {
    used: client.bind(client, {path: 'windsurf/tablas-usadas-windsurf'}),
    new: client.bind(client, {path: 'windsurf/tablas-windsurf'})
  }

  client.masts = {
    used: client.bind(client, {path: 'windsurf/mastiles-usados-windsurf'}),
    new: client.bind(client, {path: 'windsurf/mastiles-windsurf'})
  }

  client.booms = {
    new: client.bind(client, {path: 'windsurf/botavaras-windsurf'}),
    used: client.bind(client, {path: 'windsurf/botavaras-usadas-windsurf'})
  }

  client.fins = {
    new: client.bind(client, {path: 'windsurf/aletas'})
  }

  return client
}

module.exports = createClient
