import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, addDoc, doc, getDocs, getDoc, orderBy, limit, serverTimestamp } from "firebase/firestore";

const Homework = () => {
    //useState
    const [submit, setSubmit] = useState("");
    const [submits, setSubmits] = useState([]);
    const [HWContents, setHWContents] = useState({
        content: "숙제를 선택하면 내용이 나옵니다. ",
        date: null,
        title: "숙제를 선택해 주세요.",
        type: "",
    });
    const [HWkey, setHWkey] = useState(""); //필요없음

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

    //본문 내용 읽어오기 (onClick Event)
    const sendHWContents = async (key) => {
        try {
            const HWref = doc(dbService, "homework", `${key}`);
            const getHWContents = await getDoc(HWref);
            console.log(getHWContents.data());  // 클릭한 부분의 값을 잘 가져오고 있음.
            setHWContents(getHWContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

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
                title: submit,
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
        if (timestamp) {
            const date = timestamp.toDate();
            return `${date.getMonth() + 1}/${date.getDate()}`;
        }
        return;
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
                        <div class="homeworkListForm" key={homework.id} onClick={() => { sendHWContents(homework.id) }}>
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
                            {HWContents.type} {HWContents.title}
                        </div>
                        <div class="homeworkDate">
                            {stampToDate(HWContents.date)}
                        </div>
                    </div>
                    <div class="homeworkContents">
                        {HWContents.content}
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