import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

const Question = () => {

    //useState
    const [submits, setSubmits] = useState([]);
    const [questionContents, setQuestionContents] = useState({
        content: "내용입니다.",
        date: null,
        title: "보고 싶은 내용을 선택하세요.",
        secret: false,
        page: "page",
        writer: "작성자",
    });
    const [questionReplys, setQuestionReplys] = useState([]);


    //숙제 리스트 받아오기
    const questionDB = collection(dbService, "question")
    const getSubmits = async () => {
        const dbSubmits = await getDocs(questionDB);
        dbSubmits.forEach((document) => {
            const submitObject = {
                ...document.data(),
                id: document.id,
            };
            setSubmits((prev) => [submitObject, ...prev]);
        });
    };

    //본문 내용 읽어오기 (onClick Event)
    const sendQuestionContents = async (key) => {
        try {
            const questionRef = doc(dbService, "question", `${key}`);
            const getQuestionContents = await getDoc(questionRef);
            setQuestionContents(getQuestionContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    // 댓글 읽어오기(본문 내용 읽어오기에 이어서...)
    // const questionReplyDB = collection(dbService, "question/reply")
    // const getQuestionReplys = async () => {
    //     const dbQuestionReplys = await getDocs(questionReplyDB);
    //     dbQuestionReplys.forEach((document) => {
    //         const questionReplyObject = {
    //             ...document.data(),
    //             id: document.id,
    //         };
    //         setQuestionReplys((prev) => [questionReplyObject, ...prev]);
    //     });
    // };

    //db값 얻어오기 useEffect
    useEffect(() => {
        getSubmits();
        // getQuestionReplys();
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
                        QUESTION
                    </div>
                    <board>
                        {submits.map(question =>
                            <div class="boardForm" onClick={() => { sendQuestionContents(question.id) }}>
                                <div class="boardListNumber">{question.number}</div>
                                <div class="boardListTitle">{question.title}</div>
                                <div class="boardListDate">{stampToDate_yymmdd(question.date)}</div>
                                <div class="boardListWriter">{question.writer}</div>
                            </div>
                        )}
                    </board>
                </div>
            </div>
            <article>
                <div class="articleForm">
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
                    <div class="homeworkTitleDate">
                        <div class="homeworkContentTitle">
                            {questionContents.title}
                        </div>
                        <div class="homeworkDate">
                            {stampToDate_yymmdd(questionContents.date)}
                        </div>
                    </div>
                    <div class="homeworkContents">
                        {questionContents.content}
                        <div class="name">
                            {questionContents.writer}
                        </div>
                    </div>
                    <div class="replyForm">
                        <div class="replyFormL">
                            <img width="50px" src="./img/reply-message.png" alt="reply" class="replyImgStyle" />
                        </div>
                        <div class="replyFormR">
                            의미가 조금 달라요.
                            <div class="name">
                                선생님
                            </div>
                        </div>

                    </div>

                </div>
            </article>
        </>
    );

};

export default Question;