import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { collection, doc, getDoc } from "firebase/firestore"
import { stampToDate_yymmdd, printDday } from 'utils';

const HomeworkDetail = ({ match }) => {

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
                        숙제 제출
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomeworkDetail;