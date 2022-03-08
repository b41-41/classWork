import React, { useState, useEffect } from "react";
import { CommentType } from "./Comment.type";
import { stampToDate_hhmmss, stampToDate_yymmdd } from "utils";
import * as S from "./Comment.styled";

const Comment = ({ comments }: CommentType) => {
  return (
    comments.length > 0 && (
      <S.Wrapper>
        <S.BtnIcon>댓글 {comments.length}개</S.BtnIcon>

        {comments.map((item) => {
          return (
            <S.CommentWrapper key={item.id}>
              <S.WriterWrapper>
                <S.Avatar />
                <S.WriteInfoWrapper>
                  <S.Writter>{item.writer}</S.Writter>
                  <S.Date>
                    {stampToDate_hhmmss(item.createAt)}
                    작성
                  </S.Date>
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
