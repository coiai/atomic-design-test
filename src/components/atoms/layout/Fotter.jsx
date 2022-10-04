import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 coiai design</SFooter>;
};

const SFooter = styled.footer`
  background-color: skyblue;
  padding: 8px 16px;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const SLink = styled(Link)`
  margin-right: 16px;
  text-decoration: none;
  color: white;
`;
