import axios from 'axios'
import 'dotenv/config'

const apiUrl = process.env.API_KEY

export const api = axios.create({
  baseURL: apiUrl,
})
