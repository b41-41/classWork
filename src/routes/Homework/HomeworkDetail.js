import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService, authService } from 'fbase';
import { doc, getDoc, getDocs, collection } from "firebase/firestore"
import { stampToDate_yymmdd, printDday } from 'utils';

const HomeworkDetail = ({ match }) => {
    const [HWContents, setHWContents] = useState({});
    const [HWSubmitCheck, setHWSubmitCheck] = useState(false);
    const key = match.params.id;
    const UID = authService.currentUser.uid;

    //본문 내용 읽어오기 (onClick Event)
    const sendHWContents = async () => {
        try {
            const HWref = doc(dbService, "homework", key);
            const getHWContents = await getDoc(HWref);
            setHWContents(getHWContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    // 숙제 제출 여부 확인
    const checkHomeworkSubmission = async () => {
        try {
            const HomeworkListCollection = collection(dbService, "homework", key, "submit");
            const HWListItems = await getDocs(HomeworkListCollection);
            const HWListArray = [];
            HWListItems.forEach((document) => {
                const submitObject = {
                    ...document.data(),
                    id: document.id,
                };
                HWListArray.push(submitObject);
            });
            const checkDocAndUid = HWListArray.find(document => document.uid === UID);
            checkDocAndUid ? setHWSubmitCheck(true) : setHWSubmitCheck(false); //숙제 제출 여부 상태 업데이트

        } catch (e) {
            console.error("List Loadig Error :", e)
        }
    }

    useEffect(() => {
        sendHWContents();
        checkHomeworkSubmission();
    }, [key])

    return (
        <>
            <div className="homeworkTitleBar">
                <span className="homeworkTitleBar__type">{HWContents.type}</span><br />
                <div className="homeworkTitleBar__title">{HWContents.title}</div><br />
                <span className="homeworkTitleBar__dday">{printDday(HWContents.deadline)}</span>
                <span className="homeworkTitleBar__deadline">
                    ~{stampToDate_yymmdd(HWContents.deadline)}
                </span>
            </div>
            <div className="homeworkContents">
                {HWContents.content}
            </div>
            <Link to={{
                pathname: `/Homework/${key}/submit`,
                state: { key }
            }}>
                <div className="homeworkSubmit">
                    <div className="homeworkSubmitL">
                        <img width="50px" src="../img/send.png" alt="send" />
                    </div>
                    <div className="homeworkSubmitR">
                        {HWSubmitCheck ? "숙제 수정" : "숙제 제출"}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomeworkDetail;