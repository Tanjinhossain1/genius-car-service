import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Sheard/Footer/Footer';
import Header from './Pages/Sheard/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
