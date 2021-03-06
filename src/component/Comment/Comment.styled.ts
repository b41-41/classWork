import styled from "styled-components";
import { THEME_COLOR_PINK, THEME_COLOR_RED } from "const/Theme";

export const Wrapper = styled.div`
  width: 100%;
  margin: 15px 0;
  padding: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 1px 4px #eeedeb;
`;

export const BtnIcon = styled.div`
  display: inline-block;
  margin: 0 5px 15px 0;
  padding: 3px;
  background-color: ${THEME_COLOR_PINK};
  color: white;
  font-size: 10px;
  border-radius: 5px;
`;

export const WriterWrapper = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  margin-right: 10px;
  width: 35px;
  height: 35px;
  background-color: grey;
  border-radius: 100%;
`;

export const WriteInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const Writter = styled.div`
  color: blue;
  font-size: 10px;
  font-weight: bold;
`;

export const Date = styled.div`
  color: grey;
  font-size: 10px;
`;

export const Content = styled.div`
  margin: 25px 0 0 0;
  font-size: 14px;
  line-height: 12px;
`;

export const CommentWrapper = styled.div`
  & + div {
    margin-top: 30px;
    padding-top: 30px;
    border-top: solid 1px #c2c2c2;
  }
`;

export const DeleteBtnIcon = styled.button`
  all: unset;
  display: inline-block;
  margin: 0 5px;
  padding: 2px;
  background-color: ${THEME_COLOR_RED};
  color: white;
  font-size: 8px;
  border-radius: 5px;
  cursor: pointer;
`;