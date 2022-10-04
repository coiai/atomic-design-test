import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: white;
  box-shadow: #eee 2px 2px 6px 4px;
  padding: 16px 14px;
  border-radius: 8px;
`;
