import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Blind from "./components/Blind";
import Deaf from "./components/Deaf";
import Dumb from "./components/Dumb";
import Mute from "./components/Mute";


function App() {
  return (
   <div>
    <Navbar/>

    <Routes>

<Route path="/" element={<Main/>}/>
<Route path="/blind" element={<Blind/>}/>
<Route path="/deaf" element={<Deaf/>}/>
<Route path="/mute" element={<Mute/>}/>
<Route path="/dumb" element={<Dumb/>}/>



    </Routes>
   </div>
  );
}

export default App;
