import express from 'express'
const app = express();
const port = 3013

app.get('/', (req,res) => {
  res.send('fala dev, blz')
})

app.listen(port,()=>{
  console.log('listening on port - Dev')
})