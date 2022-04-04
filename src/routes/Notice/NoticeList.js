import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { stampToDate_yymmdd } from 'utils';

const NoticeList = () => {
    const [dataList, setDataList] = useState([]);

    //숙제 리스트 받아오기
    const noticeDB = query(collection(dbService, "notice"), orderBy("number"))
    const getDataList = async () => {
        const dbDataList = await getDocs(noticeDB);
        dbDataList.forEach((document) => {
            const submitObject = {
                ...document.data(),
                id: document.id,
            };
            setDataList((prev) => [submitObject, ...prev]);
        });
    };

    //db값 얻어오기 useEffect
    useEffect(() => {
        setDataList([]);
        getDataList();
    }, [])

    return (
        <>
            {/* 숙제 리스트 */}
            {dataList.map(notice =>
                <Link key={notice.id} to={`/Notice/${notice.id}`}>
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