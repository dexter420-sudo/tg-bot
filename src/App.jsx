import Home from "./components/home";
import VideoTut from "./components/videoTut";
import './App.css';
import "./bulma/css/bulma.css"
import { Route, Routes } from "react-router-dom";

const App = ()=> {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/video-tutorial" element={<VideoTut/>}/>
      </Routes>
    </div>
  );
}

export default App;
