import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = "61f87aa578643ee3b66c5c89cec9d66b";
const TOKEN_AUTH = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWY4N2FhNTc4NjQzZWUzYjY2YzVjODljZWM5ZDY2YiIsInN1YiI6IjY1OWM2NDRmODliNTYxNWJkZTRkOTM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OflsVx_oT0AmoNYqmWslbwO1CDyZuCSKo51kVTGsQb4';

const api = axios.create({
     baseURL: BASE_URL,
     params: { 
    'api_key': API_KEY,
   },
    headers: {
    'Authorization': TOKEN_AUTH,
  },
});
  

export default api;