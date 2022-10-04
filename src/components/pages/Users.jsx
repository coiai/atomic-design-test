import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `coiai${val}`,
    image: "https://source.unsplash.com/3Xd5j9-drDA",
    email: "coiai@gmail.com",
    tel: "090-0000-0000",
    company: {
      name: "coiai design"
    },
    web: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User List</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 0 16px;
`;

const SUserArea = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 14px;
`;
