import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to={`/`}>🏠HOME</SLink>
      <SLink to={`/users/`}>😉USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: skyblue;
  padding: 8px 16px;
  font-weight: bold;
`;

const SLink = styled(Link)`
  margin-right: 16px;
  text-decoration: none;
  color: white;
`;
