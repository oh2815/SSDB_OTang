import styled from "styled-components";
import { MatzipInterface } from "../../types/interface";

const CardDiv = styled.div`
  width: 240px;
  background-color: whitesmoke;
  height: 300px;
  margin: 1rem;
  text-align: center;
  border-radius: 10px;
  padding: 0 0.5rem;

  @media screen and(max-width: 840px) {
    width: 200px;
    height: 280px;
  }
  @media screen and(max-width: 720px) {
    width: 180px;
    height: 255px;
  }
`;

interface ImageDivProps {
  src: string;
}
const ImageDiv = styled.div<ImageDivProps>`
  width: 80%;
  height: 150px;
  border: 1px solid #777;
  margin: 1rem auto;
  background-image: url(${(props: ImageDivProps) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const P = styled.p`
  /* 말줄임표 처리하기 위한 css */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  margin-top: 0.5rem;
  font-size: 14px;
`;
export default function Card({ imgSrc, title, desc }: MatzipInterface) {
  return (
    <CardDiv>
      <ImageDiv src={imgSrc}></ImageDiv>
      <h3>{title}</h3>
      <P>{desc}</P>
    </CardDiv>
  );
}
