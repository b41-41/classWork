import React from "react";
import { CommentType } from "./Comment.type";
import { stampToDate_hhmmss } from "utils";
import * as S from "./Comment.styled";
import deleteComment from 'component/DeleteComment';

const Comment = ({ comments, uid, menuId, postId }: CommentType) => {
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
                  <S.Writter>
                    {item.writer}
                    &nbsp;
                    {item.uid === uid && (
                      <S.DeleteBtnIcon onClick={()=>{deleteComment(menuId, postId, item.id)}}>
                      삭제
                      </S.DeleteBtnIcon>
                    )}
                  </S.Writter>
                  <S.Date>
                    {stampToDate_hhmmss(item.createAt)}
                    &nbsp;작성
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
