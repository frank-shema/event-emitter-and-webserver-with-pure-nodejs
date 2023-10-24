const logEvents = require('./logEvent')
const EventEmitter = require('events')
class MyEmiter extends EventEmitter {}
const myEmitter = new MyEmiter()
myEmitter.on('log',(msg)=>{
    logEvents(msg)
})

setTimeout(()=>{
    myEmitter.emit('log', 'log event emitted')
},2000)
 