import './App.css';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>


      </Routes>

    </div>
  );
}

export default App;
