const testConstant = require('./components/constants')
const testScope = require('./components/scoping')
const testEnhancer = require('./components/objenhancer')
const testArrows = require('./components/arrowf')
const testExtpar = require('./components/extpar')
const testTempl = require('./components/templ')
const testDest = require('./components/dest')
const testCls = require('./components/modcls')
const testProm = require('./components/prom')

testConstant()
testScope()
testEnhancer()
testArrows()
testExtpar()
testTempl()
testDest()

document.write('<h1>Hello ES6</h1>')
console.log('Hello ES6 console')
