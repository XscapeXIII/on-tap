import "../App.css";

import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../constants/route";

import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

import Dashboard from "../pages/Admin/Dashboard";
import ToDoList from "../pages/Admin/Todolist";
import ToDoDetail from "../pages/Admin/Tododetail";

import HomePage from "../pages/User/Home";
import ProductListPage from "../pages/User/ProductList";
import ProductDetailPage from "../pages/User/ProductDetail";

import LoginPage from "../pages/Login";
function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.ADMIN.TODO_LIST} element={<ToDoList />} />
        <Route path={ROUTES.ADMIN.TODO_DETAIL} element={<ToDoDetail />} />
      </Route>
      <Route element={<UserLayout />}>
        <Route path={ROUTES.USER.HOME} element={<HomePage />} />
        <Route path={ROUTES.USER.PRODUCT_LIST} element={<ProductListPage />} />
        <Route
          path={ROUTES.USER.PRODUCT_DETAIL}
          element={<ProductDetailPage />}
        />
      </Route>
      <Route path="login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
