import React, { useState, useEffect } from "react";
import { dbService } from 'fbase';
import { collection, doc, getDoc } from "firebase/firestore"

const HomeworkDetail = ({ match }) => {

    //useState
    const [HWContents, setHWContents] = useState({});

    //DB Load
    const homeworkDB = collection(dbService, "homework")

    const key = match.params.id;

    //본문 내용 읽어오기 (onClick Event)
    const sendHWContents = async () => {
        try {
            const HWref = doc(dbService, "homework", `${key}`);
            const getHWContents = await getDoc(HWref);
            setHWContents(getHWContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    useEffect(() => {
        sendHWContents();
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
            <div className="homeworkTitleDate">
                <div className="homeworkContentTitle">
                    <span className="homeworkContentTitle__type">{HWContents.type}</span>
                    <span className="homeworkContentTitle__text">{HWContents.title}</span>
                </div>
                <div className="homeworkDate">
                    {stampToDate_yymmdd(HWContents.date)}
                </div>
            </div>
            <div className="homeworkContents">
                {HWContents.content}
            </div>
            <div className="homeworkSubmit">
                <div className="homeworkSubmitL">
                    <img width="50px" src="../img/send.png" alt="send" />
                </div>
                <div className="homeworkSubmitR">
                    숙제 제출
                </div>
            </div>
        </>
    )
}

export default HomeworkDetail;