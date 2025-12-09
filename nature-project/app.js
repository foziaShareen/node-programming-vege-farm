const express = require('express')
const fs = require('fs');

const app = express();
app.use(express.json())
const port = 3000;
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`,'utf-8'))

const getAllTours = (req,res)=>{
    res.status(200).json({
        status:"success",
        results:tours.length,
        
        data:{
            tour:tours
        }
    })

}
const getTour =(req,res)=>{
    console.log("URL:", req.url);
    console.log("Params:", req.params);
    const id = req.params.id * 1;
    //above line is same as const id = Number(req.params.id),it is nice trick to convert string to number
    const tour = tours.find(el => el.id === id)
    // it will true if id is valid otherwise false
    if(id > tours.length){
        return res.status(404).json({
            status:"fail",
            message:"invalid id"
        })
    }
    res.status(200).json({
        status:"success",
        data:{
            tour
        }
    })
}
const updateTour =(req,res)=>{
    if(req.params.id * 1 > tours.length){
        return res.status(404).json({
            status:"fail",
            message:"invalid id"
        })
    }
    res.status(201).json({
        status:"success",
        data:{
            tour:'<updated tour here></updated>'
        }
    })
}
const deleteTour=(req,res)=>{
    if(req.params.id * 1 > tours.length){
        return res.status(404).json({
            status:"fail",
            message:"invalid id"
        })
    }
    res.status(204).json({
        status:"success",
        data:null
        
        
    })
}
const createTour =(req,res)=>{
    console.log(req.body)
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id:newId},req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),(err)=>{
        res.status(201).json({
            status:"success",
            data:{
                tour:newTour
            }
        })
    })

    res.send('you have post data ')
}
//better way to handle same route with different methods
// app.get('/api/v1/tours',getAllTours )
// app.get('/api/v1/tours/:id',getTour)

// app.patch('/api/v1/tours/:id',updateTour)
// app.delete('/api/v1/tours/:id',deleteTour)


// app.post('/api/v1/tours',createTour)
//now following is the best way
app.route('/api/v1/tours').get(getAllTours).post(createTour)
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)
app.listen(port,()=>{
 console.log(`server is running on port ${port}`)
})