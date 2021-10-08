import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

const Notice = () => {

    //useState
    const [submits, setSubmits] = useState([]);
    const [noticeContents, setNoticeContents] = useState({
        content: "내용입니다.",
        date: null,
        title: "보고 싶은 내용을 선택하세요.",
        secret: false,
        page: "page",
        writer: "작성자",
    });


    //숙제 리스트 받아오기
    const noticeDB = collection(dbService, "notice")
    const getSubmits = async () => {
        const dbSubmits = await getDocs(noticeDB);
        dbSubmits.forEach((document) => {
            const submitObject = {
                ...document.data(),
                id: document.id,
            };
            setSubmits((prev) => [submitObject, ...prev]);
        });
    };

    //본문 내용 읽어오기 (onClick Event)
    const sendNoticeContents = async (key) => {
        try {
            const noticeRef = doc(dbService, "notice", `${key}`);
            const getNoticeContents = await getDoc(noticeRef);
            setNoticeContents(getNoticeContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    //db값 얻어오기 useEffect
    useEffect(() => {
        getSubmits();
    }, []);

    // 타임스템프 변환
    const stampToDate = (timestamp) => {
        if (timestamp) {
            const date = timestamp.toDate();
            return `${date.getMonth() + 1}/${date.getDate()}`;
        }
        return;
    };

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
            <div class="list">
                <div class="listForm">
                    <div class="currMenu">
                        NOTICE
                    </div>
                    <board>
                        {submits.map(notice =>
                            <div class="boardForm" onClick={() => { sendNoticeContents(notice.id) }}>
                                <div class="boardListNumber">{notice.number}</div>
                                <div class="boardListTitle">{notice.title}</div>
                                <div class="boardListDate">{stampToDate_yymmdd(notice.date)}</div>
                            </div>
                        )}
                    </board>
                </div>
            </div>
            <article>
                <div class="articleForm">
                    <div class="notiBar">
                        <div class="noti_search">
                            <div class="noti_search_n">
                                <span class="icon2">
                                    <img width="20px" src='./img/notification.png' alt="notification" />
                                </span>
                            </div>
                            <div class="noti_search_s">
                                <span class="icon2">
                                    <img width="20px" src='./img/search.png' alt="search" />
                                </span>
                                <span class="search">
                                    <input placeholder="Search for anything" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="homeworkTitleDate">
                        <div class="homeworkContentTitle">
                            {noticeContents.title}
                        </div>
                        <div class="homeworkDate">
                            {stampToDate_yymmdd(noticeContents.date)}
                        </div>
                    </div>
                    <div class="homeworkContents">
                        {noticeContents.content}
                    </div>
                    <div class="replyForm">
                        <div class="replyFormL">
                            <img width="50px" src="./img/reply-message.png" alt="reply" class="replyImgStyle" />
                        </div>
                        <div class="replyFormR">
                            알겠습니다!!
                            <div class="name">
                                린짱
                            </div>
                        </div>

                    </div>

                </div>
            </article>
        </>
    );

};

export default Notice;