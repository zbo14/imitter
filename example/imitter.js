'use strict'

/* eslint-env node, es6 */

const {Imitter} = require('..')

const imitter = new Imitter()

imitter.onImmediate('1', () => {
  console.log('Firing event:2')
  imitter.emit('2')
})

imitter.onImmediate('2', () => {
  console.log('Firing event:3')
  imitter.emit('3')
})

imitter.onImmediate('3', () => {
  console.log('Firing event:1')
  imitter.emit('1')
})

console.log('Firing event:1')
imitter.emit('1')
