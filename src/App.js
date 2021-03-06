import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Sheard/Footer/Footer';
import Header from './Pages/Sheard/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Sheard/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequerAuth from './Pages/RequerAuth/RequerAuth';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import UpdateService from './Pages/UpdateService/UpdateService';
import CheckOut from './Pages/CheckOut/CheckOut';
import OrderHistory from './Pages/OrderHistory/OrderHistory';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
       <Route path='/checkout/:serviceId' element={<CheckOut></CheckOut>}></Route>
       <Route path='/service/:serviceId' element={
         <RequerAuth>
           <ServiceDetail></ServiceDetail>
         </RequerAuth>
       }></Route>

       <Route path='/addservice' element={
         <RequerAuth>
          <AddService></AddService>
         </RequerAuth>
       }></Route>
       <Route path='/orderhistory' element={
         <RequerAuth>
          <OrderHistory></OrderHistory>
         </RequerAuth>
       }></Route>

       <Route path='/update/:id' element={
         <RequerAuth>
         <UpdateService></UpdateService>
         </RequerAuth>
       }></Route>

       <Route path='/manageservice' element={
         <RequerAuth>
          <ManageService></ManageService>
         </RequerAuth>
       }></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
