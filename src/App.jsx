import Homepage from "./Homepage"
import { Route, Routes } from 'react-router-dom';
import Contact from "./contact.jsx";
import About from "./about.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/ContactPage" element={<Contact />}/>
      <Route path="/AboutUsPage" element={<About />}/>
    </Routes>
  );
}

export default App;
