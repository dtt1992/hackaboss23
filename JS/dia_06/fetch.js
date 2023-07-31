// Manejo fetch

fetch("https://randomuser.me/api")
    .then(data => data.json())
    .then(info => console.log(info))


// JSON
// JavaScript Object Notation
// Formato de transferencia de data entre maquinas

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd40f5030damshd6fde2dda7ce978p1f5402jsn3fb4c72ce4cc',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))
    .finally(info=>console.log(info))