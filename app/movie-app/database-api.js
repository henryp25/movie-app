import React from 'react'
import axios from 'axios'


const movieAPI = process.env.REACT_APP_MOVIE_API
const readAccessToken = process.env.REACT_APP_READ_ACCESS_TOKEN
function DatabaseApi() {
    const url = 'https://api.themoviedb.org/3/configuration'
    const api_key = movieAPI
    const accessToken = readAccessToken
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    }
    const fetchMovies = async () => {
        try {
            const response = await axios.get(url, options)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    fetchMovies()
}

DatabaseApi()

// Path: app/movie-app/pages/index.js