import { createServer } from 'http'
import app from './src/app.js'
import  { env } from './src/config/env.js'

async function main() {
    const server = createServer(app)
    const port = env.port || 3100 
    server.listen(port, () => {
        console.log(`server is runnning on url : http://localhost:${port}`)
    })
}


main().catch((error) => {
    console.log(`Server errror is ${error}`)
})