import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'
import { APIkey } from '../../common/apis/MovieApiKey'


const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async()=>{
  const movietext="Harry";
    try {
        const response= await MovieApi.get(`?apikey=${APIkey}&s=${movietext}&type=movie`)
          return response.data;
        } catch (error) {
          console.log("Error : ",error);
        }
})


const initialState={
    movies: {}
};

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies: (state,{ payload })=>{
            state.movies = payload;
        },
    },
    extraReducers:{
        
    }

});


export const {addMovies}=movieSlice.actions;
export const getAllMovies =(state)=> state.movies.movies;  //first movies is movieslicename and then movies is movies[]
export default movieSlice.reducer;