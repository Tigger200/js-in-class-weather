import API_TOKEN from".config.js'

const Api_token = '5c7bd4d8d71846fd87f133816233003';
export default Api_token;



let cityName=Document.getElementById('city-name')
let fahrenheit=document.getElementById('current-temp-fah')
let celsiusTemp=document.getElementById('current-temp-cel')

let form = document.querySelector(form)

let cityToSearch=document.getElementById(imput-city)
form.addEventListener('submit',event)=>{
    event.preventDefault();
    console.log (cityToSearch.value)

fetch http://api.weatherapi.com/v1/current.json?key=${API_TOKEN}&q=London&aqi=no

    .then(response => response.json())
    .then(data=> {
        console.log(data)
        cityName.innerText = data.location.name
        fahrenheit.innerText = Math.round(data.current.temp_f)
        celsiustemp.innerText = Math.round(data.current.temp_c)

    let form = document.querySelector(form)
    let cityToSearch=document.getElementById(imput-city).value
    form.addEventListener('submit',event)
    let cityToSearch=formData.get('imput')

fetch(https://sunrise-sunset.org/search?location=buffalo)





    })