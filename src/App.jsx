import './App.css'
import {Route, Routes} from "react-router-dom";
import Error404 from "./pages/404.jsx";
import Home from "./pages/Home.jsx";
import Contact from './pages/Contact.jsx';

function App() {

  return (
    <>
      <div className="bg-white dark:bg-gray-950 transition duration-500">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/contact"} element={<Contact/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
