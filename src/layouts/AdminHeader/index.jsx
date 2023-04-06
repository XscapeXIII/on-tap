import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/route";
import * as S from "./styles";

function AdminHeader() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate(ROUTES.USER.HOME);
  };
  return (
    <S.HeaderWrapper>
      <S.Button>Menu</S.Button>
      <S.Button onClick={() => handleLogOut()}>Log Out</S.Button>
    </S.HeaderWrapper>
  );
}

export default AdminHeader;
