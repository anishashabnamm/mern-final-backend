const express = require ('express')
const app = express()
const router = express.Router()
const PORT = 3500

app.get('/', (req, res)=>
{
    res.send('It is working')
})


app.listen(PORT, console.log(`Server listening at http://localhost:${PORT}`))