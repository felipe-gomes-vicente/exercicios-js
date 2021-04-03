const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded());
app.use(express.json())


app.listen(8081, () => console.log('Executando...'))
