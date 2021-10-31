import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { doc, getDoc } from "firebase/firestore"

const NoticeDetail = ({ match }) => {

    const [noticeContents, setNoticeContents] = useState({});

    // //DB Load
    // const noticeDB = collection(dbService, "notice")

    const key = match.params.id;

    //본문 내용 읽어오기 (onClick Event)
    const sendNoticeContents = async () => {
        try {
            const HWref = doc(dbService, "notice", `${key}`);
            const getNoticeContents = await getDoc(HWref);
            setNoticeContents(getNoticeContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    useEffect(() => {
        sendNoticeContents();
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
                <div className="homeworkTitleBar__title">{noticeContents.title}</div><br />
                <span className="homeworkTitleBar__deadline">
                    {stampToDate_yymmdd(noticeContents.date)}
                </span>
            </div>
            <div className="homeworkContents">
                {noticeContents.content}
            </div>
            <Link to={{
                pathname: `/Notice/${key}/comment`,
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

export default NoticeDetail;