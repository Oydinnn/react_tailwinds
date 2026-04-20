import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";      
import Company from "./pages/Company.jsx";     
import Career from "./pages/Career.jsx";       
import Blog from "./pages/Blog.jsx";           
import Contact from "./pages/Contact.jsx";     
import Clone from "./pages/Clone.jsx";          

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/clone" element={<Clone/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App