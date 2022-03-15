import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService, authService } from 'fbase';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Comment, DeletePost } from 'component';
import { stampToDate_yymmdd } from 'utils';

const QuestionDetail = ({ match }) => {
    const QUESTION = "question";

    const [questionContents, setQuestionContents] = useState({});
    const [comments, setComments] = useState([]);

    const key = match.params.id;
    const UID = authService.currentUser.uid;

    //본문 내용 읽어오기 
    const sendQuestionContents = async () => {
        try {
            const HWref = doc(dbService, QUESTION, key);
            const getQuestionContents = await getDoc(HWref);
            setQuestionContents(getQuestionContents.data());
        } catch (e) {
            console.error("내용 불러오기 오류 : ", e);
        }
    };

    //코멘트 읽어오기
    const sendComment = async () => {
        try {
            const commentRef = collection(dbService, QUESTION, key, "reply");
            const getComment = await getDocs(commentRef);
            const commentArray = [];
            setComments([]); //코멘트 초기화
            getComment.forEach(data => {
                const datas = {
                    ...data.data(),
                    id: data.id,
                };
                commentArray.push(datas);
            })
            setComments(commentArray);
        } catch (e) {
            console.error("코멘트 불러오기 오류 : ", e);
        }
    }

    //주소 값이 바뀔 때마다 코멘트, 본문 내용 읽어오기
    useEffect(() => {
        sendQuestionContents();
        sendComment();
    }, [match.url])

    return (
        <>
            <div className="homeworkTitleBar">
                <div className="homeworkTitleBar__title">{questionContents.title}</div><br />
                <span className="homeworkTitleBar__deadline">
                    {stampToDate_yymmdd(questionContents.createAt)}
                </span>
                <span className="homeworkTitleBar__dday">{questionContents.writer}</span>
                {questionContents.uid === UID && <button className="homeworkTitleBar__delete" onClick={() => DeletePost('question', key)}>삭제</button>}
            </div>
            <div className="homeworkContents">
                {questionContents.content}
            </div>
            {/* 댓글 영역 */}
            <Comment comments={comments} uid={UID} menuId="question" postId={key} />
            <Link to={{
                pathname: `/Question/content/${key}/comment`,
                state: { key }
            }}>
                <div className="homeworkSubmit">
                    <div className="homeworkSubmitL">
                        <img width="50px" src="/img/reply-message.png" alt="send" />
                    </div>
                    <div className="homeworkSubmitR">
                        댓글 남기기
                    </div>
                </div>
            </Link>
        </>
    )
}
export default QuestionDetail;