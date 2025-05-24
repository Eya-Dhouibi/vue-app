import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9000', // base de ton backend Medusa
  headers: {
    'Content-Type': 'application/json',
    'x-publishable-api-key': 'pk_1861d3221180548fee0e22a862f21663857362f90234882643aac46b43c1764a', 
  },
});

export default instance;
