import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://us-central1-clone-37bfb.cloudfunctions.net/api',
  //  'http://localhost:5001/clone-37bfb/us-central1/api',
})
