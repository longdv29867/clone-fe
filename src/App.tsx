import "./App.css";
import DetailProduct from "./pages/DetailProduct";
import { Route, Routes } from "react-router-dom";
import AccountPage from "./pages/AccountPage/AccountPage";
import AccountInfomation from "./components/Accout/AccountInfomation";
import ChangePassword from "./components/Accout/ChangePassword";
import MyOrderPage from "./components/MyOrderPage/MyOrderPage";
import ProductListPage from "./components/ProductListPage/ProductListPage";
import Layout from "./Layout/Layout";
import LoginLayout from "./Layout/LoginLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <>
      <Spinner />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="account" element={<AccountPage />} />
          <Route path="infomation" element={<AccountInfomation />} />
          <Route path="updatepassword" element={<ChangePassword />} />
          <Route path="detail" element={<DetailProduct />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="order" element={<MyOrderPage />} />
        </Route>
        <Route path="/auth" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* Các route khác nếu có */}
      </Routes>
    </>
  );
}

export default App;
