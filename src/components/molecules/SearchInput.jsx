import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton.jsx";
import { Input } from "../atoms/input/input.jsx";

export const SearchInput = () => {
  return (
    <SButtonContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>Search🔎</PrimaryButton>
      </SButtonWrapper>
    </SButtonContainer>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SButtonContainer = styled.div`
  display: flex;
`;
