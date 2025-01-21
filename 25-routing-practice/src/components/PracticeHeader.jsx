import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
  width: 100%;
  background-color: aliceblue;
  height: 70px;
  /* display: flex;
  justify-content: end;
  align-items: center; */
`;

const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const MyLink = styled(Link)`
  color: green;
  &:hover {
    color: black;
  }
`;

const Li = styled.li`
  margin-left: 1rem;
`;
export default function PracticeHeader() {
  return (
    <Nav>
      <Ul>
        <Li>
          <MyLink to={"/"}>홈으로</MyLink>
        </Li>
        <Li>
          <MyLink to={"/student/sean"}>학생</MyLink>
        </Li>
        <Li>
          <MyLink to={"/student/codingon"}>코딩온</MyLink>
        </Li>
        <Li>
          <MyLink to={"/student/new?name=jisu"}>searchParams</MyLink>
        </Li>
      </Ul>
    </Nav>
  );
}
