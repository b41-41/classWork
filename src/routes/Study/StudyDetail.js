import React, { useState, useEffect } from "react";
import { dbService } from 'fbase';
import { doc, getDoc } from "firebase/firestore"
import { stampToDate, stampToDate_yymmdd } from 'utils';


const StudyDetail = ({ match }) => {

    const [studyContents, setStudyContents] = useState({});

    const key = match.params.id;

    //본문 내용 읽어오기 (onClick Event)
    const sendStudyContents = async () => {
        try {
            const HWref = doc(dbService, "study", `${key}`);
            const getStudyContents = await getDoc(HWref);
            setStudyContents(getStudyContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    useEffect(() => {
        sendStudyContents();
    }, [key])



    //남은 마감 날짜 계산
    const printDday = (deadline) => {
        if (deadline === undefined) {
            return;
        }
        const today = new Date();
        const endDay = deadline.toDate();
        const endDayDistance = (endDay - today);
        const dday = Math.floor(endDayDistance / (1000 * 60 * 60 * 24));
        if (endDay < today) {
            return `마감`
        } else {
            return (`-${dday}일`)
        }
    }

    return (
        <>
            <div className="homeworkTitleBar">
                <span className="homeworkTitleBar__type">{studyContents.chapter}{studyContents.type}</span><br />
                <div className="homeworkTitleBar__title">{studyContents.title}</div><br />
                <span className="homeworkTitleBar__deadline">
                    {stampToDate_yymmdd(studyContents.date)}
                </span>
            </div>
            <div className="homeworkContents">
                {studyContents.content}
                <br /><br /> 📚 {studyContents.page}
            </div>
        </>
    )
}

export default StudyDetail;