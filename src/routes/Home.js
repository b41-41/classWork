import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from 'fbase';
import { collection, getDocs } from "firebase/firestore";

const Home = ({ match }) => {
    const [studyContents, setStudyContents] = useState([]);
    const [noticeContents, setNoticeContents] = useState([]);
    const [homeworkContents, setHomeworkContents] = useState([]);

    //최근 수업 정보 받아오기 
    const sendContents = async () => {
        try {
            const noticeRef = collection(dbService, "notice");
            const studyRef = collection(dbService, "study");
            const homeworkRef = collection(dbService, "homework");

            const getNoticeContents = await getDocs(noticeRef);
            getNoticeContents.forEach((document) => {
                const noticeObject = {
                    ...document.data(),
                    id: document.id,
                };
                setNoticeContents((prev) => [noticeObject, ...prev].sort(function (a, b) { return b.date - a.date }));
            });

            const getStudyContents = await getDocs(studyRef);
            getStudyContents.forEach((document) => {
                const studyObject = {
                    ...document.data(),
                    id: document.id,
                };
                setStudyContents((prev) => [studyObject, ...prev].sort(function (a, b) { return b.date - a.date }));
            });

            const getHomeworkContents = await getDocs(homeworkRef);
            getHomeworkContents.forEach((document) => {
                const homeworkObject = {
                    ...document.data(),
                    id: document.id,
                };
                setHomeworkContents((prev) => [homeworkObject, ...prev].sort(function (a, b) { return b.date - a.date }));
            });

        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    useEffect(() => {
        sendContents();
    }, []);

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
                        MY CLASSES
                    </div>
                    <div class="listClassName">
                        한국어센터 1급 2반
                    </div>
                    <div class="teacherForm">
                        <div class="teacherPhoto">
                            <img class="teacherJPG" width="auto" width="150px" src="./img/teacher.png" alt="teacher" />
                        </div>
                        <div class="teacherInfo">
                            <span class="teacherTag">NAME</span><br />
                            <span class="teacherContent">정다빈</span><br />
                            <span class="teacherTag">E-MAIL</span><br />
                            <span class="teacherContent">malgolil41@gmail.com</span><br />
                            <span class="teacherTag2">
                                ✉️ Send Message
                            </span>
                        </div></div>
                    <h2>NOTICE & HOMEWORK</h2>
                    <div class="nnhForm">
                        <ul class="nnhForm__notice">
                            {noticeContents.map((notice, i) =>
                                i < 3 ?
                                    <li class="nnhForm__notice--content">
                                        <div class="nnhForm__notice--content-titlebox">
                                            <span class="nnhForm__notice--content-title">{notice.title}</span>
                                            <span class="nnhForm__notice--content-date">{stampToDate_yymmdd(notice.date)}</span>
                                        </div>
                                        <span class="nnhForm__notice--content-text">{notice.content}</span>
                                    </li>
                                    : ''
                            )}
                        </ul>
                        <ul class="nnhForm__homework">
                            {homeworkContents.map((homework, i) =>
                                i < 2 ?
                                    (i + 1) % 2 !== 0 ?
                                        <Link to={{ pathname: `/Homework/${homework.id}` }}>
                                            <li class="nnhForm__homework--box">
                                                <span class="nnhForm__homework--box-title">{homework.title}</span>
                                                <span class="nnhForm__homework--box-date">{stampToDate_yymmdd(homework.date)}</span>
                                            </li>
                                        </Link>
                                        :
                                        <Link to={{ pathname: `/Homework/${homework.id}` }}>
                                            <li class="nnhForm__homework--box2">
                                                <span class="nnhForm__homework--box-title">{homework.title}</span>
                                                <span class="nnhForm__homework--box-date">{stampToDate_yymmdd(homework.date)}</span>
                                            </li>
                                        </Link>
                                    : ''
                            )}


                        </ul>
                    </div>
                    <h2>CALENDER</h2>
                    <div class="calender">
                        달력
                    </div>
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
                    <h2>LAST CLASS</h2>
                    <div class="lastClass">
                        <div class="lastClass_icon">
                            <img height="100px" src='./img/class.png' alt="next class" />
                        </div>
                        <div class="lastClass_content">
                            <span class="class_title">지난 수업</span>
                            <div class="class_contents">{studyContents.map((data, i) => i === 0 ? data.title : '')}</div>
                        </div>
                    </div>
                    <h2>NEXT CLASS</h2>
                    <div class="nextClass">
                        <div class="nextClass_content">
                            <span class="class_title">다음 수업</span>
                            <span class="class_contents">{studyContents.map((data, i) => i === 0 ? data.next : '')}</span>
                        </div>
                        <div class="nextClass_icon">
                            <img height="100px" src='./img/nextclass.png' alt="next class" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Home;