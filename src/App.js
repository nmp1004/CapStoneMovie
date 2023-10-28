import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Layout from './template/Layout';
import PageDetail from './page/DetailMovie/PageDetail/PageDetail';
import PagePurchase from './page/PurchaseTicket/PurchasePage/PagePurchase';
import AdminPage from './page/AdminPage/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path='/admin' element={
        
            <AdminPage/>  
        }
        />
        <Route 
        path='/' 
        element=
        {<Layout><Home/></Layout>}/>
        <Route 
        path='/movie/:id' 
        element=
        {<Layout><PageDetail/></Layout>}/>
        <Route 
        path='/purchase/:maLichChieu' 
        element={<Layout><PagePurchase></PagePurchase></Layout>}/>
        <Route 
        path='/login' 
        element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
