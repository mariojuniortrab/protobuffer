const http = require('http')
const static = require('node-static')
const file = new static.Server('./')
const port = 3210
const crypto = require('crypto')

const generateAcceptValue = (acceptKey) => 
  crypto
  .createHash('sha1')
  .update(acceptKey + '258EAFA5-E914–47DA-95CA-C5AB0DC85B11', 'binary')
  .digest('base64')



const server = new http.createServer((req, res)=>{
    req.addListener('end', () => file.serve(req, res)).resume()
})

server.on('upgrade', (req, socket) => {
    if (req.headers['upgrade'] !== 'websocket') {
      socket.end('HTTP/1.1 400 Bad Request')
      return
    }
})

server.listen(port, () => console.log(`Servidor rodando em localhost:${port}`))