const express = require('express')
const fs = require('fs')
const app = express();
app.use(express.json())
const port = 3000;
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`,'utf-8'))
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:"success",
        results:tours.length,
        
        data:{
            tours:tours
        }
    })

})

app.post('/api/v1/tours',(req,res)=>{
    console.log(req.body)

    res.send('you have post data ')
})
app.listen(port,()=>{
 console.log(`server is running on port ${port}`)
})