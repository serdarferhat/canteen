import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Deliver from "./pages/Deliver";
import Menu from "./pages/Menu";
import MyOrder from "./pages/MyOrder";
import Order from "./pages/Order";


function App() {
  return (
    <div className="container">
      <Header/>
      
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Menu/>}/>
     <Route path="/order" element={<Order/>}/>
     <Route path="/deliver" element={<Deliver/>}/>
     <Route path="/myorder" element={<MyOrder/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
