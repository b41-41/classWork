import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { Route, Link } from "react-router-dom";
import StudyList from './StudyList';
import NotiSearchBar from 'component/NotiSearchBar';
import StudyDetail from './StudyDetail';
import { DESKTOP_SIZE } from 'const/breakPoint';

const Study = ({ match }) => {
    //useState
    const [submits, setSubmits] = useState([]);
    const [studyContents, setStudyContents] = useState({
        chapter: "1과",
        content: "내용입니다.",
        date: null,
        title: "보고 싶은 내용을 선택하세요.",
        type: "",
        page: "page",
    });

    //숙제 리스트 받아오기
    const homeworkDB = collection(dbService, "study")
    const getSubmits = async () => {
        const dbSubmits = await getDocs(homeworkDB);
        dbSubmits.forEach((document) => {
            const submitObject = {
                ...document.data(),
                id: document.id,
            };
            setSubmits((prev) => [submitObject, ...prev]);
        });
    };

    //본문 내용 읽어오기 (onClick Event)
    const sendStudyContents = async (key) => {
        try {
            const studyRef = doc(dbService, "study", `${key}`);
            const getStudyContents = await getDoc(studyRef);
            setStudyContents(getStudyContents.data());
        } catch (e) {
            console.error("Error onClick: ", e);
        }
    };

    //db값 얻어오기 useEffect
    useEffect(() => {
        getSubmits();
    }, []);

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
            {(window.innerWidth > DESKTOP_SIZE) ?
                <>
                    <div class="list">
                        <div class="listForm">
                            <Link to="/Study">
                                <div class="currMenu">
                                    STUDY
                                </div>
                            </Link>
                            <StudyList />
                        </div>
                    </div>
                    <article>
                        <div className="articleForm">
                            <NotiSearchBar />
                            <Route exact path={`${match.path}`}><p>메뉴를 선택하세요.</p></Route>
                            <Route
                                path={`${match.path}/:id`}
                                render={({ match }) => <StudyDetail {...{ match }} />}
                            />
                        </div>
                    </article>
                </>
                :
                <>
                    <div class="list">
                        <div class="listForm">
                            <Link to="/Study">
                                <div class="currMenu">
                                    STUDY
                                </div>
                            </Link>
                            <Route exact path={`${match.path}`} component={StudyList} />
                        </div>
                    </div>
                    <article>
                        <div className="articleForm">
                            <Route
                                path={`${match.path}/:id`}
                                render={({ match }) => <StudyDetail {...{ match }} />}
                            />
                        </div>
                    </article>
                </>
            }

        </>
    );

};

export default Study;