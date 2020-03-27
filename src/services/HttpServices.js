import axios from 'axios'

const http = axios.create({
    baseURL: 'http://api.tvmaze.com/shows'
 
  });

export default http