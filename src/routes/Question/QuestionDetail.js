import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Comment } from 'component';
import { stampToDate_yymmdd } from 'utils/stampToDate_yymmdd';

const QuestionDetail = ({ match }) => {
    const QUESTION = "question";

    const [questionContents, setQuestionContents] = useState({});
    const [comments, setComments] = useState([]);

    const key = match.params.id;

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
            setComments([]); //코멘트 초기화
            getComment.forEach(data => {
                const datas = {
                    ...data.data(),
                    id: data.id,
                };
                setComments([datas]);
            })
        } catch (e) {
            console.error("코멘트 불러오기 오류 : ", e);
        }
    }

    useEffect(() => {
        sendQuestionContents();
        sendComment();
    }, [key])


    return (
        <>
            <div className="homeworkTitleBar">
                <div className="homeworkTitleBar__title">{questionContents.title}</div><br />
                <span className="homeworkTitleBar__deadline">
                    {stampToDate_yymmdd(questionContents.date)}
                </span>
                <span className="homeworkTitleBar__dday">{questionContents.writer}</span>
            </div>
            <div className="homeworkContents">
                {questionContents.content}
            </div>
            {/* 댓글 영역 */}
            <Comment comments={comments} />
            <Link to={{
                pathname: `/Question/${key}/comment`,
                state: { key }
            }}>
                <div className="homeworkSubmit">
                    <div className="homeworkSubmitL">
                        <img width="50px" src="../img/reply-message.png" alt="send" />
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