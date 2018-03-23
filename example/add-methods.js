'use strict'

/* eslint-env node, es6 */

const EventEmitter = require('events')
const {addMethods} = require('..')

const emitter = new EventEmitter()
addMethods(emitter)

emitter.onImmediate('1', () => {
  console.log('Firing event:2')
  emitter.emit('2')
})

emitter.onImmediate('2', () => {
  console.log('Firing event:3')
  emitter.emit('3')
})

emitter.onImmediate('3', () => {
  console.log('Firing event:1')
  emitter.emit('1')
})

console.log('Firing event:1')
emitter.emit('1')
