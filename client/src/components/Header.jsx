import { FaSearch, FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.header`
  height: 6em;
  background: #00181d;
  color: white;
  border-bottom: 1px solid #e0d2ff50;

  /* To center vertically */
  display: grid;
`;

const Wrapper = styled.div`
  padding: 0.625em 5em;
  /* background: lightgreen; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  margin-left: 2em;
`;

const Logo = styled.span`
  font-weight: 800;
  font-size: 2.5em;
  font-family: "Gloock", serif;
  font-style: italic;
  letter-spacing: 0.2ch;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.0625em solid rgb(152, 152, 152);
  background: rgba(236, 236, 236, 0.148);
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-between;
  padding: 0.2em 1em;
  border-radius: 2em;
`;

const Input = styled.input`
  border: none;
  flex: 2;
  margin-right: 0.3em;
  outline: none;
  font-size: 1.5em;
  padding: 0.4em 0.5em;
  background: transparent;
  color: white;
  /* font-family: "Josefin Sans", sans-serif; */
  /* text-align: center; */
  &::placeholder {
    color: #ffffff2c;
    align-self: center;
  }
`;

const UserLinks = styled.div`
  font-size: 1.5em;
  display: flex;
  gap: 1.5em;
  justify-content: end;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
`;

const Register = styled.div`
  /* border: 2px solid rgb(152, 152, 152); */
  border: 2px solid #007d6f;
  padding: 0.3em 0.7em;
  border-radius: 2em;
  cursor: pointer;

  &:hover {
    background: #007d6f;
    border: 2px solid #007d6f;
  }
`;

const SignIn = styled.div`
  margin-right: 1em;
  /* border: 2px solid rgb(152, 152, 152); */
  border: 2px solid #007d6f;
  padding: 0.3em 0.7em;
  border-radius: 2em;
  cursor: pointer;

  &:hover {
    background: #007d6f;
  }
`;

const Cart = styled.div`
  cursor: pointer;
  transition: scale color 0.3s ease;
  &:hover .cart-icon {
    scale: 1.2;
    color: #03bba5;
  }
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>FURNEEZ</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <FaSearch />
            <Input placeholder="Search"></Input>
          </SearchContainer>
        </Center>
        <Right>
          <UserLinks>
            <Register>Register</Register>
            <SignIn>Sign-In</SignIn>
            <Cart>
              <FaShoppingCart className="cart-icon" />
            </Cart>
          </UserLinks>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
