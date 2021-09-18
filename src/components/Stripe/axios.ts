import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-37bfb/us-central1/api',
})
