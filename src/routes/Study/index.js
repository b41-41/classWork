import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

const Study = () => {
    //useState
    const [submits, setSubmits] = useState([]);
    const [studyContents, setStudyContents] = useState({
        chapter: "1과",
        content: "내용입니다.",
        date: null,
        title: "보고 싶은 내용을 선택하세요.",
        type: "",
        page: "page",
    });

    //숙제 리스트 받아오기
    const homeworkDB = collection(dbService, "study")
    const getSubmits = async () => {
        const dbSubmits = await getDocs(homeworkDB);
        dbSubmits.forEach((document) => {
            const submitObject = {
                ...document.data(),
                id: document.id,
            };
            setSubmits((prev) => [submitObject, ...prev]);
        });
    };

    //본문 내용 읽어오기 (onClick Event)
    const sendStudyContents = async (key) => {
        try {
            const studyRef = doc(dbService, "study", `${key}`);
            const getStudyContents = await getDoc(studyRef);
            setStudyContents(getStudyContents.data());
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
                        STUDY
                    </div>
                    {submits.map((study, i) =>
                        i % 2 === 0 ?
                            <div class="homeworkListForm" onClick={() => { sendStudyContents(study.id) }}>
                                <div class="homeworkListForm_l">
                                    <div class="homeworkListDate">
                                        {stampToDate(study.date)}
                                    </div>
                                </div>
                                <div class="homeworkListForm_r">
                                    <div class="homeworkListTag">
                                        {study.chapter} {study.type}
                                    </div>
                                    <div class="homeworkListTitle">
                                        {study.title}
                                    </div>
                                    <div class="homeworkListMTag">
                                        📚 {study.page}
                                    </div>
                                </div>
                            </div>
                            :
                            <div class="homeworkListForm2" onClick={() => { sendStudyContents(study.id) }}>
                                <div class="homeworkListForm_l">
                                    <div class="homeworkListDate">
                                        {stampToDate(study.date)}
                                    </div>
                                </div>
                                <div class="homeworkListForm_r">
                                    <div class="homeworkListTag">
                                        {study.chapter} {study.type}
                                    </div>
                                    <div class="homeworkListTitle">
                                        {study.title}
                                    </div>
                                    <div class="homeworkListMTag">
                                        📚 {study.page}
                                    </div>
                                </div>
                            </div>
                    )}

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
                            {studyContents.title}
                        </div>
                        <div class="homeworkDate">
                            {stampToDate_yymmdd(studyContents.date)}
                        </div>
                    </div>
                    <div class="homeworkContents">
                        {studyContents.content}
                        <div class="homeworkListMTag">
                            📚 {studyContents.page}
                        </div>
                    </div>

                </div>
            </article>
        </>
    );

};

export default Study;