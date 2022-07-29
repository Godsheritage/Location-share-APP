import http from 'http'

const server = http.createServer()

let port = process.env.PORT || 1234

server.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
