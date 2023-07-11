import Homepage from "./Homepage"
import { Route, Routes } from 'react-router-dom';
import Contact from "./contact.jsx";
import About from "./about.jsx";
import ProductThreeJs from "./productThreeJs.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/ContactPage" element={<Contact />}/>
      <Route path="/AboutUsPage" element={<About />}/>
      <Route path="/PorductDisplayPage" element={<ProductThreeJs />}/>
    </Routes>
  );
}

export default App;
