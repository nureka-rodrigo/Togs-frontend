import './App.css'
import {Route, Routes} from "react-router-dom";
import Error404 from "./pages/404.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Error404/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default App
