import axios from 'axios';



export async function getDetails(word) 
{
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/dl',
        params: {
          id: word,
          cgeo: 'DE'
        },
        headers: {
          'x-rapidapi-key': import.meta.env.REACT_APP_API_KEY,
          'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
      };
try {
	const response = await axios.request(options);
	return(response.data)
} catch (error) {
	console.error(error);
}}