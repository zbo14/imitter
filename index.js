'use strict'

/* eslint-env node, es6 */

const EventEmitter = require('events')

class Imitter extends EventEmitter {
  emitLog (eventName, ...results) {
    console.log(`Firing event:${eventName}`)
    super.emit(eventName, ...results)
  }
  on (eventName, handler) {
    super.on(eventName, (...results) => setImmediate(handler, ...results))
  }
  onLog (eventName, handler) {
    super.on(eventName, (...results) => {
      setImmediate(() => {
        console.log(`Handling event:${eventName}`)
        handler(...results)
      })
    })
  }
}

module.exports = Imitter
