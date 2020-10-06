import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.tvmaze.com/shows'
 
  });

export default http