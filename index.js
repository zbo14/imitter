'use strict'

/* eslint-env node, es6 */

const EventEmitter = require('events')

class Imitter extends EventEmitter {
  emit (eventName, ...results) {
    setImmediate(() => super.emit(eventName, ...results))
  }
  emitLog (eventName, ...results) {
    setImmediate(() => {
      console.log(`Firing event:${eventName}`)
      super.emit(eventName, ...results)
    })
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
