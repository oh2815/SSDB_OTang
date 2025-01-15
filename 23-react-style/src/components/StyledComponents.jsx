import styled, { keyframes } from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0;
`;

const H4title = styled.h4`
  background-color: yellowgreen;
  /* 반응형 설정하기 */
  // 세로가 더 크면 ; portrait
  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: green;
  }
  // 가로가 더 크면 ; landscape
  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: red;
  }
`;

const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;

// animation 사용시 keyframes import 필수
const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(180deg);
    background-color: aliceblue;
  }
  100%{
    transform: rotate(360deg);
  }
`;

// props, hover, animation 사용
const Child = styled.span`
  color: red;

  //&(엔퍼센트 기호는 자기 자신을 가르킴)
  &:hover {
    /* color: white; */
    cursor: pointer;
    color: ${(props) => (props.color ? props.color : "white")};
    background-color: ${(props) => (props.bg ? props.bg : "yellow")};
    /* Hover시 animation적용 */
    animation: ${rotate} 1s linear infinite; // 벡틱 안에 있기때문에 변수 선언은 달러 중괄호이용
  }
`;
export default function StyledComponents() {
  return (
    <StyledContainer>
      <H4title>Styled Components 이용</H4title>
      <ParentDiv>
        <Child>1111111111</Child>
        <Child color="blue" bg="">
          2222222222
        </Child>
        <Child>3333333333</Child>
      </ParentDiv>
    </StyledContainer>
  );
}
