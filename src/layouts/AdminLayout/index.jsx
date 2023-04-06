import * as S from "./styles";
import "../../App.css";
import AdminHeader from "../AdminHeader";
import { Outlet } from "react-router-dom";

function AdminMainLayout() {
  return (
    <div className="wrapper">
      <AdminHeader />
      <S.AdminMainWrapper>
        <Outlet />
      </S.AdminMainWrapper>
    </div>
  );
}

export default AdminMainLayout;
