import styled from "styled-components";
import { Card } from "../../atoms/card/Card.jsx";
import { UserIconWithName } from "../../molecules/user/UserIconWithName.jsx";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDiv>
        <SRow>
          <Stitle>mail</Stitle>
          <p>{user.email}</p>
        </SRow>
        <SRow>
          <Stitle>tel</Stitle>
          <p>{user.tel}</p>
        </SRow>
        <SRow>
          <Stitle>company</Stitle>
          <p>{user.company.name}</p>
        </SRow>
        <SRow>
          <Stitle>web</Stitle>
          <p>{user.web}</p>
        </SRow>
      </SDiv>
    </Card>
  );
};

const SDiv = styled.div`
  margin-top: 16px;
  p {
    margin: 4px;
  }
`;

const SRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Stitle = styled.p`
  width: 82px;
`;
