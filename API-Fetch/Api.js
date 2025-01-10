// const fetchFunction = new Promise ((resolve,reject)=>{
//     const 
// })

const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1/highlights?username_or_id_or_url=mrbeast';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a37f9e5443mshc3224cc1004de1cp14a6e8jsn5f3b42469e0f',
		'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}