import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { collection, getDocs } from "firebase/firestore"
import { stampToDate } from 'utils';

const StudyList = () => {
    const [submits, setSubmits] = useState([]);

    //숙제 리스트 받아오기
    const studyDB = collection(dbService, "study")
    const getSubmits = async () => {
        const dbSubmits = await getDocs(studyDB);
        dbSubmits.forEach((document) => {
            const submitObject = {
                ...document.data(),
                id: document.id,
            };
            setSubmits((prev) => [submitObject, ...prev]);
        });
    };

    //db값 얻어오기 useEffect
    useEffect(() => {
        getSubmits();
    }, [])


    return (
        <>
            {submits.map((study, i) =>
                <Link key={study.id} to={`/Study/${study.id}`} >
                    <div className={i % 2 === 0 ? "homeworkListForm" : "homeworkListForm2"} key={study.id}>
                        <div className="homeworkListForm_l">
                            <div className="homeworkListDate">
                                {stampToDate(study.date)}
                            </div>
                        </div>
                        <div className="homeworkListForm_r">
                            <div className="homeworkListTag">
                                {study.chapter} {study.type}
                            </div>
                            <div className="homeworkListTitle">
                                {study.title}
                            </div>
                            <div className="homeworkListMTag">
                                📚 {study.page}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
}

export default StudyList;