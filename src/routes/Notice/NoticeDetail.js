import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService, authService } from 'fbase';
import { doc, getDoc, collection, getDocs } from "firebase/firestore"
import { stampToDate_yymmdd } from 'utils';
import { Comment } from 'component';

const NoticeDetail = ({ match }) => {
    const NOTICE = "notice";

    const [noticeContents, setNoticeContents] = useState({});
    const [comments, setComments] = useState([])

    const key = match.params.id;
    const UID = authService.currentUser.uid;

    //본문 내용 읽어오기
    const sendNoticeContents = async () => {
        try {
            const HWref = doc(dbService, "notice", `${key}`);
            const getNoticeContents = await getDoc(HWref);
            setNoticeContents(getNoticeContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    //코멘트 읽어오기
    const sendComment = async () => {
        try {
            const commentRef = collection(dbService, NOTICE, key, "reply");
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
        sendNoticeContents();
        sendComment();
    }, [match.url])

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
            {/* 댓글 영역 */}
            <Comment id="comment" comments={comments} uid={UID} menuId="notice" postId={key} />
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