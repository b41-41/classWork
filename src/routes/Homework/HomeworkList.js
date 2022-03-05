import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { collection, getDocs, orderBy } from "firebase/firestore"
import { stampToDate } from 'utils';

const HomeworkList = () => {
    const [submits, setSubmits] = useState([]);
    const history = useHistory();

    //숙제 리스트 받아오기
    const homeworkDB = collection(dbService, "homework")
    const getSubmits = async () => {
        const dbSubmits = await getDocs(homeworkDB, orderBy("deadline"));
        dbSubmits.forEach((document) => {
            const submitObject = {
                ...document.data(),
                id: document.id,
            };
            setSubmits((prev) => [submitObject, ...prev].sort(function (a, b) { return b.deadline - a.deadline }));
        });
    };

    //db값 얻어오기 useEffect
    useEffect(() => {
        getSubmits();
    }, [])

    //숙제 마감 여부 계산
    const chkDeadline = (deadline) => {
        const today = new Date();
        if (deadline.toDate() < today) {
            return `🔚 마감 되었습니다.`
        } else {
            return `✔ 숙제를 내세요.`
        }
    }

    return (
        <>
            {/* 숙제 리스트 */}
            {submits.map((homework, i) =>
                i % 2 === 0 ?
                    <Link to={`/Homework/${homework.id}`} >
                        <div className="homeworkListForm" key={homework.id}>
                            <div className="homeworkListForm_l">
                                <div className="homeworkListDate">
                                    ~{stampToDate(homework.deadline)}
                                </div>
                            </div>
                            <div className="homeworkListForm_r">
                                <div className="homeworkListTag">
                                    {homework.type}
                                </div>
                                <div className="homeworkListTitle">
                                    {homework.title}
                                </div>
                                <div className="homeworkListMTag">
                                    {chkDeadline(homework.deadline)}
                                </div>
                            </div>
                        </div>
                    </Link>
                    :
                    <Link to={`/Homework/${homework.id}`} >
                        <div className="homeworkListForm2" key={homework.id}>
                            <div className="homeworkListForm_l">
                                <div className="homeworkListDate">
                                    ~{stampToDate(homework.deadline)}
                                </div>
                            </div>
                            <div className="homeworkListForm_r">
                                <div className="homeworkListTag">
                                    {homework.type}
                                </div>
                                <div className="homeworkListTitle">
                                    {homework.title}
                                </div>
                                <div className="homeworkListMTag">
                                    {chkDeadline(homework.deadline)}
                                </div>
                            </div>
                        </div>
                    </Link>
            )}
        </>
    )
}

export default HomeworkList;