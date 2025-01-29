import axios from 'axios';



export async function getvideo(part){

  const options = {
    method: 'GET',
    url: `https://yt-api.p.rapidapi.com/${part}`,
    headers: {
      'x-rapidapi-key': 'c7a232a1bdmshd13e1c66cbe4376p1a319bjsn47fb38b36bca',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
  };

try {
	const response = await axios.request(options);
  console.log(response)
	return response.data.data
} catch (error) {
	return 'error'
}}