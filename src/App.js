import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {action,comedy,crime,drama,thriller,adventure,animation,originals} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={crime} title='Crime' isSmall />
      <RowPost url={drama} title='Drama' isSmall />
      <RowPost url={thriller} title='Thriller' isSmall />
      <RowPost url={adventure} title='Adventure' isSmall />
      <RowPost url={animation} title='Animation' isSmall />
      <Footer/>
    </div>
  );
}

export default App;
