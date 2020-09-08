import styled from "styled-components";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export const InstagramStory = styled.div`
  position: relative;
  width: 60vw;
  height: 100px;
  margin: 20px auto;
  background: #fff;
  border: 1px solid #eee;
`;
export const LeftArrow = styled(BsFillCaretLeftFill)`
  position: absolute;
  left: 0;
  top: 32px;
  z-index: 5;
  font-size: 24px;
  color : #ccc;
  cursor : pointer;
  border : 3px solid #eee;
  border-radius : 50%;
`;
export const RightArrow = styled(BsFillCaretRightFill)`
  position: absolute;
  right: 0;
  top: 32px;
  z-index: 5;
  color : #ccc;
  font-size: 24px;
  cursor : pointer;
  border : 3px solid #eee;
  border-radius : 50%;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content : center;
  align-items : center;
  height: 100px;
  width: 60px;
  padding : 5px;
  &:hover{
  opacity : 0.7;
  }
`;
export const UserImage = styled.img.attrs(({ image }) => ({ src: `${image}` }))`
  object-fit: cover;
  width: 60%;
  height: 100%;
  border-radius: 50%;
`;
