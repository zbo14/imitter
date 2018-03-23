'use strict'

/* eslint-env node, es6 */

const EventEmitter = require('events')

/**
 * Imitter
 * @extends EventEmitter
 */

class Imitter extends EventEmitter {
  onImmediate (eventName, handler) {
    super.on(eventName, (...results) => setImmediate(handler, ...results))
  }
  onceImmediate (eventName, handler) {
    super.once(eventName, (...results) => setImmediate(handler, ...results))
  }
}

/**
 * addMethods
 * @param {EventEmitter} emitter
 */

const addMethods = emitter => {
  emitter.onImmediate = (eventName, handler) => {
    emitter.on(eventName, (...results) => setImmediate(handler, ...results))
  }
  emitter.onceImmediate = (eventName, handler) => {
    emitter.once(eventName, (...results) => setImmediate(handler, ...results))
  }
}

module.exports = {Imitter, addMethods}
