import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Livepage from './Livepage'
import Graph from './Graph'
function App() {
  return (
    <>
  <Router>
  <Routes>
  <Route path = "/" element = {< Livepage />} />
  <Route path = "/Graph" element = {< Graph />} />
     </Routes>
  </Router>
  </>
   
  );
}

export default App;
