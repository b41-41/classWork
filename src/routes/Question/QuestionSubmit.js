import React from "react";
import CommentWriteForm from 'component/Comment/CommentWriteForm';

const QuestionSubmit = ({ match }) => {
    const postId = match.params.id;
    return <CommentWriteForm menu={"Question"} menuId={"question"} postId={postId} />
}

export default QuestionSubmit;