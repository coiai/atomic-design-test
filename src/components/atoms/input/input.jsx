import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  font-size: 16px;
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 4px;
  outline: none;
`;
