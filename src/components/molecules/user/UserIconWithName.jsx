import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <Scontainer>
      <Simage src={image} alt={name} />
      <Susername>{name}</Susername>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  align-items: center;
`;

const Susername = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 8px 0;
  padding-left: 16px;
`;

const Simage = styled.img`
  height: 64px;
  width: 64px;
  object-fit: cover;
  border-radius: 26px;
  border: solid #ddd 1px;
`;
