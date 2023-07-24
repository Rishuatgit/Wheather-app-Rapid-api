const express=require('express')
const app=express()
const port=3000
const axios=require('axios')
const fs=require('fs')
const path=require('path')

const htm=fs.readFileSync(path.join(__dirname,'public/Weather.html'))


app.use(express.static('public'))
app.use(express.json());

app.get('/weather',(req,res)=>{
    res.end(htm)
})

app.post('/weather' ,(req,res)=>{
    const city=req.body;
    console.log("THIS IS INPUT",city.inputData)
    res.end(htm)
    // const city=req.query.city;
    // console.log(city)
    axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city.inputData)
   .then(res=>{
    
    const weatherData=res.data;
    res.json(weatherData)

   })
   .catch(error=>{
    console.error('error fetching weather data:',error)
    res.status(500).json({error:'unable to fetch weather data'})
   })



})

app.listen(port,()=>{
    console.log(`this is listening on${port}`)

})