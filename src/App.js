import Login from "./comp/Login";
import Welcome from "./comp/Welcome";
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <div>
      <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
