import React from "react"
import { Routes,Route} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import MovieDetail from "./components/MovieDetail"
import PageNotFound from "./components/PageNotFound"

function App() {
  return (

    <div className="">
        <Header/>
        <div className="mx-10 my-0">
       <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/movie/:imdbID" Component={MovieDetail} />
        <Route path="*" Component={PageNotFound}/>
       </Routes>
       </div>

       <Footer/>
        
    </div>

  )
}


export default App
