// self.onmessage = function(event){
//     setTimeout(()=>{
//        self.postMessage(`Meaasage from worker ${event.data}`)
//     }, 3000)
// }
importScripts('')
const ports = []
self.onconnect = function(event){
  const port = event.ports[0]
  ports.push(port)
  port.onmessage = function(e){
    for(const singlePort of ports){
        setTimeout(()=>{
            singlePort.postMessage(`Meaasage from worker port ${e.data}`)
         }, 3000)
    }
  }
}