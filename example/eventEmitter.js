'use strict'

/* eslint-env node, es6 */

// adapted from https://www.codementor.io/simenli/demystifying-asynchronous-programming-part-2-node-js-eventemitter-7r51ivby4

const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('1', () => {
  console.log('Handling event:1')
  setImmediate(() => {
    console.log('Firing event:2')
    emitter.emit('2')
  })
})

emitter.on('2', () => {
  console.log('Handling event:2')
  setImmediate(() => {
    console.log('Firing event:3')
    emitter.emit('event3')
  })
})

emitter.on('event3', () => {
  console.log('Handling event:3')
  setImmediate(() => {
    console.log('Firing event:1')
    emitter.emit('1')
  })
})

console.log('Firing event:1')
emitter.emit('1')
