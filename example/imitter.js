'use strict'

/* eslint-env node, es6 */

const Imitter = require('../')

const imitter = new Imitter()

imitter.onLog('1', () => imitter.emitLog('2'))
imitter.onLog('2', () => imitter.emitLog('3'))
imitter.onLog('3', () => imitter.emitLog('1'))

imitter.emitLog('1')
