import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { doc, getDoc } from "firebase/firestore";
import { Comment } from 'component';

const QuestionDetail = ({ match }) => {

    const [questionContents, setQuestionContents] = useState({});

    const key = match.params.id;

    //본문 내용 읽어오기 (onClick Event)
    const sendQuestionContents = async () => {
        try {
            const HWref = doc(dbService, "question", `${key}`);
            const getQuestionContents = await getDoc(HWref);
            setQuestionContents(getQuestionContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    useEffect(() => {
        sendQuestionContents();
    }, [key])

    // 타임스템프 to date (yy.mm.dd)
    const stampToDate_yymmdd = (timestamp) => {
        if (timestamp) {
            const date = timestamp.toDate();
            return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        }
        return;
    };

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
            <Comment />
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