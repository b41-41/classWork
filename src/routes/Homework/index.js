import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { dbService } from 'fbase';
import { collection, addDoc, doc, getDocs, getDoc, orderBy, serverTimestamp } from "firebase/firestore";
import HomeworkList from 'routes/Homework/HomeworkList';
import HomeworkDetail from 'routes/Homework/HomeworkDetail';


const Homework = ({ match }, key) => {
    //useState
    const [submit, setSubmit] = useState("");
    const [submits, setSubmits] = useState([]);
    const [HWContents, setHWContents] = useState({
        content: "숙제를 선택하면 내용이 나옵니다. ",
        date: null,
        title: "숙제를 선택해 주세요.",
        type: "",
    });

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
        } catch (error) {
            console.error("Error adding document: ", error);
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

    // 타임스템프 to date (yy.mm.dd)
    const stampToDate_yymmdd = (timestamp) => {
        if (timestamp) {
            const date = timestamp.toDate();
            return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
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
            {/* 중앙 레이아웃 */}
            <div className="list">
                <div className="listForm">
                    <div className="currMenu">
                        HOMEWORK
                    </div>
                    {/* 글쓰기(임시) */}
                    <form onSubmit={onSubmit}>
                        <input value={submit} onChange={onChange} type="text" placeholder="testInput" maxLength={120} />
                        <input type="submit" value="Submit" />
                    </form>
                    {/* 숙제 리스트 부분 */}
                    <HomeworkList
                        submit
                        submits
                        HWContents
                        sendHWContents
                    />
                </div>
            </div>

            {/* 우측 레이아웃 */}
            <article>
                <div className="articleForm">
                    <div className="noti_search">
                        <div className="noti_search_n">
                            <span className="icon2">
                                {match.path === "/Homework" ?
                                    <img width="20px" src='./img/notification.png' alt="notification" />
                                    :
                                    <img width="20px" src='../img/notification.png' alt="notification" />
                                }
                            </span>
                        </div>
                        <div className="noti_search_s">
                            <span className="icon2">
                                <img width="20px" src='./img/search.png' alt="search" />
                            </span>
                            <span className="search">
                                <input placeholder="Search for anything" />
                            </span>
                        </div>
                    </div>
                    <Route exact path={`${match.path}`}><p>메뉴를 선택하세요.</p></Route>
                    <Route
                        path={`${match.path}/:id`}
                        component={HomeworkDetail}
                    />
                </div>
            </article>
        </>
    );

};

export default Homework;