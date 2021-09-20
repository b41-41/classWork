import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, addDoc, getDocs } from "firebase/firestore";

const Homework = () => {
    const [submit, setSubmit] = useState("");
    const [submits, setSubmits] = useState([]);
    const getSubmits = async () => {

        const dbSubmits = await getDocs(collection(dbService, "homework"));
        dbSubmits.forEach((document) => {
            const submitObject = {
                ...document.data(),
                id: document.id,
            };
            setSubmits((prev) => [submitObject, ...prev]);
        });
    };
    useEffect(() => {
        getSubmits();
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "homework"), {
                content: submit,
                date: Date.now()
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

    return (
        <>
            <div class="list">
                <div class="listForm">
                    <div class="currMenu">
                        HOMEWORK
                    </div>
                    {/* 숙제 */}
                    <form onSubmit={onSubmit}>
                        <input value={submit} onChange={onChange} type="text" placeholder="testInput" maxLength={120} autoFocus />
                        <input type="submit" value="Submit" />
                    </form>
                    {console.log(submits.map)}
                    {submits.map(homework =>
                        <div key={homework.id}>
                            <h4>{homework.content}</h4>
                        </div>
                    )}
                    <div class="homeworkListForm">
                        <div class="homeworkListForm_l">
                            <div class="homeworkListDate">
                                ~09/05
                            </div>
                        </div>
                        <div class="homeworkListForm_r">
                            <div class="homeworkListTag">
                                waiting
                            </div>
                            <div class="homeworkListTitle">
                                말하기 숙제
                            </div>
                            <div class="homeworkListTitle">
                                녹음하세요.
                            </div>
                            <div class="homeworkListMTag">
                                ✔️ 숙제를 내세요.
                            </div>
                        </div>
                    </div>
                    <div class="homeworkListForm2">
                        <div class="homeworkListForm_l">
                            <div class="homeworkListDate">
                                ~09/05
                            </div>
                        </div>
                        <div class="homeworkListForm_r2">
                            <div class="homeworkListTag">
                                waiting
                            </div>
                            <div class="homeworkListTitle">
                                말하기 숙제
                            </div>
                            <div class="homeworkListTitle">
                                녹음하세요.
                            </div>
                            <div class="homeworkListMTag2">
                                ✔️ 숙제를 내세요.
                            </div>
                        </div>
                    </div>
                    <div class="homeworkListForm">
                        <div class="homeworkListForm_l">
                            <div class="homeworkListDate">
                                ~09/05
                            </div>
                        </div>
                        <div class="homeworkListForm_r">
                            <div class="homeworkListTag">
                                waiting
                            </div>
                            <div class="homeworkListTitle">
                                말하기 숙제
                            </div>
                            <div class="homeworkListTitle">
                                녹음하세요.
                            </div>
                            <div class="homeworkListMTag">
                                ✔️ 숙제를 내세요.
                            </div>
                        </div>
                    </div>
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