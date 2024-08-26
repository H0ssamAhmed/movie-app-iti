import axios from "axios";
import { useQuery } from "react-query";


const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function FetchMovies() {
  const fetchData = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    return response.data
  }

  const { data, isLoading, error } = useQuery("moveis", fetchData)
  return { data, isLoading, error }
}


export function FetchActores() {
  const { data, isLoading, error } = useQuery("actores", async () => {
    const response = await axios.get(`${BASE_URL}/person/popular?api_key=${API_KEY}`)
    return response.data
  })
  return { data, isLoading, error }
}
export function FetchSeries() {
  const { data, isLoading, error } = useQuery("actores", async () => {
    const response = await axios.get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`)
    return response.data
  })
  return { data, isLoading, error }
}
export function FetchTVshows() {
  const { data, isLoading, error } = useQuery("actores", async () => {
    const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
    return response.data
  })
  return { data, isLoading, error }
}