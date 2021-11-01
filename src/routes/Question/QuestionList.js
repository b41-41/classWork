import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { collection, getDocs } from "firebase/firestore";

const QuestionList = () => {
    const [submits, setSubmits] = useState([]);

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

    //db값 얻어오기 useEffect
    useEffect(() => {
        getSubmits();
    }, [])

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
            {/* 숙제 리스트 */}
            {submits.map(question =>
                <Link to={`/Question/${question.id}`}>
                    <div class="boardForm" key={question.id}>
                        <div class="boardListNumber">{question.number}</div>
                        <div class="boardListTitle">{question.title}</div>
                        <div class="boardListDate">
                            {stampToDate_yymmdd(question.date)}
                            <span class="boardListWriter">{question.writer}</span>
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
}

export default QuestionList;