import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../constants/route";
import * as S from "./styles";

function UserHeader() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };
  return (
    <S.HeaderWrapper>
      <Link to={ROUTES.USER.HOME}>Logo</Link>
      <Link to={ROUTES.USER.PRODUCT_LIST}>ProDuctList</Link>
      <Link to={ROUTES.USER.PRODUCT_DETAIL}>ProductDetail</Link>
      <S.Button onClick={() => navigate(ROUTES.ADMIN.DASHBOARD)}>
        Dashboard
      </S.Button>
      <S.Button onClick={() => handleLogin()}>Login</S.Button>
    </S.HeaderWrapper>
  );
}

export default UserHeader;
