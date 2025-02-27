import axios from 'axios';



export async function getvideo(part){
console.log(JSON.stringify(import.meta.env.VITE_REACT_APP_API_KEY))
  const options = {
    method: 'GET',
    url: `https://yt-api.p.rapidapi.com/${part}`,
    headers: {
      'x-rapidapi-key':import.meta.env.VITE_REACT_APP_API_KEY,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
  };

try {
	const response = await axios.request(options);
  
	return response.data.data
} catch (error) {
	return 'error'
}}