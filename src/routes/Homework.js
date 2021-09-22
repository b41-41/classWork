import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, addDoc, getDocs, getDoc, orderBy, limit, serverTimestamp } from "firebase/firestore";

const Homework = () => {
    //useState
    const [submit, setSubmit] = useState("");
    const [submits, setSubmits] = useState([]);
    const [HWContents, setHWContents] = useState([]);
    const [HWkey, setHWkey] = useState("");

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

    //본문 내용 읽어오기
    //위에서 불러온 db값을 변수에 저장해놓고 클릭하면 본문으로 출력하는 방식으로 해봅시다. 

    //db값 얻어오기 useEffect
    useEffect(() => {
        getSubmits();
    }, []);

    //Create DB
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "homework"), {
                content: submit,
                date: serverTimestamp(),
                type: `type`,
                key: `1`,
                deadline: serverTimestamp()

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setSubmit("");
    }
    const onChange = (event) => {
        const { target: { value }, } = event;
        setSubmit(value);
    };

    // 타임스템프 변환
    const stampToDate = (timestamp) => {
        const date = timestamp.toDate();
        return `${date.getMonth() + 1}/${date.getDate()}`;
    };


    //숙제 마감 여부 계산
    const chkDeadline = (deadline) => {
        const today = new Date();
        if (deadline.toDate() < today) {
            return `🔚 마감 되었습니다.`
        } else {
            return `✔ 숙제를 내세요.`
        }
    }

    // 본 내용
    return (
        <>
            <div class="list">
                <div class="listForm">
                    <div class="currMenu">
                        HOMEWORK
                    </div>
                    {/* 숙제 */}
                    <form onSubmit={onSubmit}>
                        <input value={submit} onChange={onChange} type="text" placeholder="testInput" maxLength={120} />
                        <input type="submit" value="Submit" />
                    </form>
                    {submits.map(homework =>
                        <div class="homeworkListForm" key={homework.id}>
                            <div class="homeworkListForm_l">
                                <div class="homeworkListDate">
                                    ~{stampToDate(homework.deadline)}
                                </div>
                            </div>
                            <div class="homeworkListForm_r">
                                <div class="homeworkListTag">
                                    waiting
                                </div>
                                <div class="homeworkListTitle">
                                    {homework.type}
                                </div>
                                <div class="homeworkListTitle">
                                    {homework.content}
                                </div>
                                <div class="homeworkListMTag">
                                    {chkDeadline(homework.deadline)}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <article>
                <div class="articleForm">
                    <div class="noti_search">
                        <div class="noti_search_n">
                            <span class="icon2">
                                <img width="20px" src='./img/notification.png' alt="notification" />
                            </span>
                        </div>
                        <div class="noti_search_s">
                            <span class="icon2">
                                <img width="20px" src='./img/search.png' alt="search" />
                            </span>
                            <span class="search">
                                <input placeholder="Search for anything" />
                            </span>
                        </div>
                    </div>
                    <div class="homeworkTitleDate">
                        <div class="homeworkContentTitle">
                            말하기 숙제: 녹음하세요.
                        </div>
                        <div class="homeworkDate">
                            2021.09.21
                        </div>
                    </div>
                    <div class="homeworkContents">
                        예시의 내용입니다. 진짜 내용이 아닙니다. 블라블라
                    </div>
                    <div class="homeworkSubmit">
                        <div class="homeworkSubmitL">
                            <img width="50px" src="./img/send.png" alt="send" />
                        </div>
                        <div class="homeworkSubmitR">
                            숙제 제출
                        </div>
                    </div>
                </div>
            </article>
        </>
    );

};

export default Homework;