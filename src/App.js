import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Layout from './template/Layout';
import PageDetail from './page/DetailMovie/PageDetail/PageDetail';
import PagePurchase from './page/PurchaseTicket/PurchasePage/PagePurchase';
import AdminPage from './page/AdminPage/AdminPage';
import LayoutPage from './page/AdminPage/LayoutPage';
import UserPage from './page/AdminPage/UserPage';
import PrivateRoute from './template/PrivateRoute';
import Spinner from './component/Spinner';
import PageNotFound from './page/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Spinner/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <LayoutPage />
            </PrivateRoute>
          }>
            <Route path='/' element={<Navigate to={"/userPage"} />} />
            <Route path='/userPage' element={<UserPage />} />
            <Route path='/adminPage' element={<AdminPage/>} />
            <Route />
          </Route>
          <Route
            path='/'
            element=
            {<Layout><Home /></Layout>} />
          <Route
            path='/movie/:id'
            element=
            {<Layout><PageDetail /></Layout>} />
          <Route
            path='/purchase/:maLichChieu'
            element={<Layout><PagePurchase></PagePurchase></Layout>} />
          <Route
            path='/login'
            element={<Login />} />
          <Route
            path='*'
            element={<PageNotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
