import './App.css'
import {Route, Routes} from "react-router-dom";
import Error404 from "./pages/404.jsx";
import Home from "./pages/Home.jsx";
import Contact from './pages/Contact.jsx';
import Faq from "./pages/Faq.jsx";
import Collections from "./pages/Collections.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";

function App() {

  return (
    <>
      <div className="bg-white dark:bg-gray-950 transition duration-500">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/collections"} element={<Collections/>}/>
          <Route path={"/products"} element={<Products/>}/>
          <Route path={"/product"} element={<Product/>}/>
          <Route path={"/contact"} element={<Contact/>}/>
          <Route path={"/faq"} element={<Faq/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
