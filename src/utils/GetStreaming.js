import axios from 'axios';





export async function getStreaming(word){

  const options = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/search',
    params: {query: word},
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_REACT_APP_API_KEY,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
  };

try {
	const response = await axios.request(options);
  console.log(response.data.data)
  return(response.data.data)

} catch (error) {
	console.error(error);
}

}