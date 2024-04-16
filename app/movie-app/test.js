import React from 'react'
import axios from 'axios'



function DatabaseApi() {
    // const movieAPI = process.env.REACT_APP_MOVIE_API
    // const readAccessToken = process.env.REACT_APP_READ_ACCESS_TOKEN
    const movieAPI = "24cf0edb8516ff43634718adcb988af5"
    const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGNmMGVkYjg1MTZmZjQzNjM0NzE4YWRjYjk4OGFmNSIsInN1YiI6IjY2MTZiYmYxN2E0ZWU3MDE2MzBhNGFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NwHjomSj24e_eFSpivIagTQOGMB1Z7qePKGa-DssOYw"
    console.log(readAccessToken)
    console.log(movieAPI)
    const url = 'https://api.themoviedb.org/3/search/movie?query=ReCaRg&include_adult=false&language=en-US&page=1
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
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    fetchMovies()
}

DatabaseApi()

// Path: app/movie-app/pages/index.js