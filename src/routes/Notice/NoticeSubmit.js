import React from "react";
import { CommentWriteForm } from 'component';

const NoticeSubmit = ({ match }) => {
    const postId = match.params.id;
    return <CommentWriteForm menu="Notice" menuId="notice" postId={postId} />
}

export default NoticeSubmit;