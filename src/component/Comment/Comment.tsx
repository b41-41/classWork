import React, { useState, useEffect } from "react";
import { CommentType } from "./Comment.type";
import * as S from "./Comment.styled";

const Comment = ({ comments }: CommentType) => {
  return (
    comments.length > 0 && (
      <S.Wrapper>
        <S.BtnIcon>댓글 {comments.length}개</S.BtnIcon>

        {comments.map((item) => {
          return (
            <S.CommentWrapper>
              <S.WriterWrapper>
                <S.Avatar />
                <S.WriteInfoWrapper>
                  <S.Writter>{item.writer}</S.Writter>
                  <S.Date>2022.03.05 00:48:53 작성</S.Date>
                </S.WriteInfoWrapper>
              </S.WriterWrapper>
              <S.Content>
                <pre>{item.content}</pre>
              </S.Content>
            </S.CommentWrapper>
          );
        })}
      </S.Wrapper>
    )
  );
};

export default Comment;
