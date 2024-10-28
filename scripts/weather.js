const currentTemp = document.querySelector('#temperature');
const icon = document.querySelector('#icon');
const town = document.querySelector('#town');
const description = document.querySelector('#descriptionw');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.51207871502243&lon=-88.8686872108295&units=imperial&appid=72175137898f5dbd31a9ad90a09fac2e  ';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log("hello")
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;
    town.innerHTML = data.name
    descriptionw.innerHTML = description
    temperature.innerHTML = `${data.main.temp}&deg;F`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', description);
}

apiFetch();


