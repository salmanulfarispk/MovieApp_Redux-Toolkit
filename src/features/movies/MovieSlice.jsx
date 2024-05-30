import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'
import { APIkey } from '../../common/apis/MovieApiKey'


export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async()=>{
  const movietext="Harry";
    try {
        const response= await MovieApi.get(`?apikey=${APIkey}&s=${movietext}&type=movie`)
          return response.data;
        } catch (error) {
          console.log("Error : ",error);
          throw error;
        }
})


export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',async()=>{
    const seriestext="Lord";
      try {
          const response= await MovieApi.get(`?apikey=${APIkey}&s=${seriestext}&type=series`)
            return response.data;

          } catch (error) {
            console.log("Error : ",error);
            throw error;
          }
  })


const initialState={
    movies: {},
    shows: {},
    loading:false,
    error:null
};

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
         .addCase(fetchAsyncMovies.pending, (state)=>{
             state.loading=true;
             state.error = null;
            console.log("pending");
        })
        .addCase(fetchAsyncMovies.fulfilled , (state,{payload})=>{
            state.loading=false,
            state.movies = payload;
            console.log("fetched succesfully");
        })
        .addCase(fetchAsyncMovies.rejected ,(state)=>{
            state.loading=false;
            state.error = error.message;
           console.log("rejected ");
       })
       .addCase(fetchAsyncShows.pending, (state)=>{
        state.loading=true;
        state.error = null;
       console.log("pending");
   })
   .addCase(fetchAsyncShows.fulfilled , (state,{payload})=>{
       state.loading=false,
       state.shows = payload;
       console.log("fetched succesfully");
   })
   .addCase(fetchAsyncShows.rejected ,(state)=>{
       state.loading=false;
       state.error = error.message;
      console.log("rejected ");
  })
       
    }

});


export const {addMovies}=movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies =(state)=> state.movies.movies;   //first movies is movieslicename and then movies is movies[]
export const getAllShows =(state)=> state.movies.shows;   
export const getLoadingStatus =(state)=> state.movies.loading;
export const getErrorstatus =(state)=> state.movies.error;

