import './App.css';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Appitizers from './components/Appitizers/Appitizers';
import MainCourse from './components/MainCourse/MainCourse';
import Desart from './components/Desart/Desart';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Cart from './components/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appitizers' element={<Appitizers></Appitizers>}></Route>
        <Route path='/maincourse' element={<MainCourse></MainCourse>}></Route>
        <Route path='/desart' element={<Desart></Desart>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/cart' element={<RequireAuth>
          <Cart></Cart></RequireAuth>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
