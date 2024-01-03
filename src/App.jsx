import DrxToken from "./Components/DrxToken";
import DrxTokenParnert from "./Components/DrxTokenParnert";
import DrxTokenRoadMap from "./Components/DrxTokenRoadMap";
import DrxTokenTeam from "./Components/DrxTokenTeam";
import EventDocumentation from "./Components/EventDocumentation";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
