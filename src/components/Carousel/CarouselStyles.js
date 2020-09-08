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
  color: #ff0000;
  z-index: 5;
  font-size: 24px;
`;
export const RightArrow = styled(BsFillCaretRightFill)`
  position: absolute;
  right: 0;
  top: 32px;
  color: #ff0000;
  z-index: 5;
  font-size: 24px;
`;
export const ImageContainer = styled.div`
  display: block;
  height: 60px;
  width: 60px;
  padding: 0 5px;
`;
export const UserImage = styled.img.attrs(({ image }) => ({ src: `${image}` }))`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
