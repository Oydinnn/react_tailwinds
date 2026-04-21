import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";      
import Company from "./pages/Company.jsx"; 
import TeamTemplate from "./pages/TeamTemplate.jsx";     
import Career from "./pages/Career.jsx";       
import Blog from "./pages/Blog.jsx";   
import InnerBlog from "./pages/InnerBlog.jsx";           
import Contact from "./pages/Contact.jsx";     
import Clone from "./pages/Clone.jsx";
import InnerCareer from "./pages/InnerCareer.jsx"    
import Details from "./components/Details.jsx" 
import Requirements from "./components/Requirements.jsx"          
import Responsibilities from "./components/Responsibilities.jsx" 
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx"         



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/teamTemplate" element={<TeamTemplate/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/innerCareer" element={<InnerCareer/>}>
          <Route path="details" element={<Details />} />
          <Route path="requirements" element={<Requirements />} />
          <Route path="responsibilities" element={<Responsibilities />} />
        </Route>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/innerBlog" element={<InnerBlog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/clone" element={<Clone/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App