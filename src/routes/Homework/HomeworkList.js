import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { dbService } from 'fbase';
import { collection, addDoc, doc, getDocs, getDoc, orderBy, serverTimestamp } from "firebase/firestore"

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

    // //숙제 클릭하면 내용 페이지로 전달 (onClick Event)
    // const sendHWContents = async (key) => {
    //     try {
    //         const HWref = doc(dbService, "homework", `${key}`);
    //         const getHWContents = await getDoc(HWref);
    //         console.log(getHWContents.data());  // 클릭한 부분의 값을 잘 가져오고 있음.
    //         const HWContentsData = getHWContents.data();
    //         // setHWContents(getHWContents.data());
    //         history.location.pathname === "/Homework" ?
    //             history.push({
    //                 pathname: `Homework/${key}`,
    //             })
    //             :
    //             history.push({
    //                 pathname: `${key}`,
    //             })
    //     } catch (e) {
    //         console.error("Error onClick: ", e);
    //     }
    // };

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