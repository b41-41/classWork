import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from 'fbase';
import { collection, getDocs } from "firebase/firestore";
// import { Calendar } from 'component';
import { stampToDate_yymmdd } from 'utils';
import { TEACHER_NAME, TEACHER_EMAIL } from 'const/teacherInfo';
import { ChangeCurrentMenu } from 'redux/utils';
import { CLASSNAME } from "const/ClassInfo";

const Home = ({ match }) => {
    ChangeCurrentMenu("MYCLASSES");
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


    return (
        <>
            <div className="list">
                <div className="listForm">
                    <div className="currMenu">
                        MY CLASSES
                    </div>
                    <div className="listClassName">
                        {CLASSNAME}
                    </div>
                    <div className="teacherForm">
                        <div className="teacherPhoto">
                            <img className="teacherJPG" width="150px" src="./img/teacher.png" alt="teacher" />
                        </div>
                        <div className="teacherInfo">
                            <span className="teacherTag">NAME</span><br />
                            <span className="teacherContent">{TEACHER_NAME}</span><br />
                            <span className="teacherTag">E-MAIL</span><br />
                            <span className="teacherContent">{TEACHER_EMAIL}</span><br />
                            <span className="teacherTag2">
                                ✉️ Send Message
                            </span>
                        </div></div>
                    <h2>NOTICE & HOMEWORK</h2>
                    <div className="nnhForm">
                        <ul className="nnhForm__notice">
                            {noticeContents.slice(0, 3).map((notice) =>
                                <Link key={notice.id} to={{ pathname: `/Notice/${notice.id}` }}>
                                    <li className="nnhForm__notice--content">
                                        <div className="nnhForm__notice--content-titlebox">
                                            <span className="nnhForm__notice--content-title">{notice.title}</span>
                                            <span className="nnhForm__notice--content-date">{stampToDate_yymmdd(notice.date)}</span>
                                        </div>
                                        <span className="nnhForm__notice--content-text">{notice.content}</span>
                                    </li>
                                </Link>
                            )}
                        </ul>
                        <ul className="nnhForm__homework">
                            {homeworkContents.slice(0, 2).map((homework, i) =>
                                (i + 1) % 2 !== 0 ?
                                    <Link key={homework.id} to={{ pathname: `/Homework/${homework.id}` }}>
                                        <li className="nnhForm__homework--box">
                                            <span className="nnhForm__homework--box-title">{homework.title}</span>
                                            <span className="nnhForm__homework--box-date">{stampToDate_yymmdd(homework.date)}</span>
                                        </li>
                                    </Link>
                                    :
                                    <Link key={homework.id} to={{ pathname: `/Homework/${homework.id}` }}>
                                        <li className="nnhForm__homework--box2">
                                            <span className="nnhForm__homework--box-title">{homework.title}</span>
                                            <span className="nnhForm__homework--box-date">{stampToDate_yymmdd(homework.date)}</span>
                                        </li>
                                    </Link>
                            )}


                        </ul>
                    </div>
                    {/* <h2>CALENDER</h2>
                    <div className="calender">
                        <Calendar />
                    </div> */}
                </div>
            </div>
            <article>
                <div className="articleForm">
                    <div className="noti_search">
                        <div className="noti_search_n">
                            <span className="icon2">
                                <img width="20px" src='./img/notification.png' alt="notification" />
                            </span>
                        </div>
                        <div className="noti_search_s">
                            <span className="icon2">
                                <img width="20px" src='./img/search.png' alt="search" />
                            </span>
                            <span className="search">
                                <input placeholder="Search for anything" />
                            </span>
                        </div>
                    </div>
                    <h2>LAST CLASS</h2>
                    {studyContents.slice(0, 1).map((data) => <Link key={data.id} to={{ pathname: `/Study/${data.id}` }}>
                        <div className="lastClass">
                            <div className="lastClass_icon">
                                <img height="100px" src='./img/class.png' alt="next class" />
                            </div>
                            <div className="lastClass_content">
                                <span className="class_title">지난 수업</span>
                                <div className="class_contents">{data.title}</div>
                            </div>
                        </div>
                    </Link>)}
                    <h2>NEXT CLASS</h2>
                    <div className="nextClass">
                        <div className="nextClass_content">
                            <span className="class_title">다음 수업</span>
                            <span className="class_contents">{studyContents.slice(0, 1).map((data) => data.next)}</span>
                        </div>
                        <div className="nextClass_icon">
                            <img height="100px" src='./img/nextclass.png' alt="next class" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Home;