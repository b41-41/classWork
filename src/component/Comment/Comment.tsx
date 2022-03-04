import React from "react";
import * as S from "./Comment.styled";

const Comment = () => {
  return (
    <S.Wrapper>
      <S.BtnIcon>댓글 2개</S.BtnIcon>
      <S.WriterWrapper>
        <S.Avatar />
        <S.WriteInfoWrapper>
          <S.Writter>선생님</S.Writter>
          <S.Date>2022.03.05 00:48:53 작성</S.Date>
        </S.WriteInfoWrapper>
      </S.WriterWrapper>
      <S.Content>네, 괜찮아요.</S.Content>
    </S.Wrapper>
  );
};

export default Comment;
