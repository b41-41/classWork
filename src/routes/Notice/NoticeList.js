import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { collection, getDocs } from "firebase/firestore";
import { stampToDate_yymmdd } from 'utils';

const NoticeList = () => {
    const [submits, setSubmits] = useState([]);

    //숙제 리스트 받아오기
    const noticeDB = collection(dbService, "notice")
    const getSubmits = async () => {
        const dbSubmits = await getDocs(noticeDB);
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
            {/* 숙제 리스트 */}
            {submits.map(notice =>
                <Link to={`/Notice/${notice.id}`}>
                    <div class="boardForm" key={notice.id}>
                        <div class="boardListNumber">{notice.number}</div>
                        <div class="boardListTitle">{notice.title}</div>
                        <div class="boardListDate">{stampToDate_yymmdd(notice.date)}</div>
                    </div>
                </Link>
            )}
        </>
    )
}

export default NoticeList;