
submit.addEventListener('click',()=>{ 
	getWeather(city.value)
 
})




async function getWeather(city){
	console.log(city)
	// cityName.innerHTML=city
	
	// // var a=document.getElementById('inputweather').value
	// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
	// console.log(url)
	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key': '33b2da3b09msh83dbe6514d99854p1b9b8cjsn0ad15dbf73e8',
	// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	// 	}
	// };
	


	
	// console.log("india helllll")
	// // console.log(a)
	
	
	// const response = await fetch(url, options);
	// console.log(response.status)
	// console.log(response.ok)

	// const result = await response.json();
	// console.log(result);
	
	//     cloud_pct.innerHTML=result.cloud_pct
	//     temp.innerHTML=result.temp
	//     feels_like.innerHTML=result.feels_like
	//     humidity.innerHTML=result.humidity
	//     min_temp.innerHTML=result.min_temp
	//     max_temp.innerHTML=result.max_temp
	//     wind_speed.innerHTML=result.wind_speed
	//     wind_degrees.innerHTML=result.wind_degrees
	//     sunrise.innerHTML=result.sunrise
	//     sunset.innerHTML=result.sunset
     


	//chatGpt Code
	

	fetch('/weather',{
		method:'POST',
		headers:{'Content-Type':'application/json'},
		body:JSON.stringify({ inputData: city })
		

	})
	.then(response=>response.json()).then(data=>{
		console.log(data)
	})
  

	

	}
// } catch (error) {
// 	console.error(error);
// }


    // let a= fetch('https://goweather.herokuapp.com/weather/india')

	// a.then((value)=>{
    //      console.log(value.status)
	// 	return value.json()
	// }
	
	// ).then((value2)=>{
	// 	console.log(value2)
	// })