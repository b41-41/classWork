import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { Route, Link } from "react-router-dom";
import StudyList from './StudyList';
import NotiSearchBar from 'component/NotiSearchBar';
import StudyDetail from './StudyDetail';
import { DESKTOP_SIZE } from 'const/breakPoint';
import { ChangeCurrentMenu } from 'redux/utils';

const Study = ({ match }) => {
    ChangeCurrentMenu("STUDY");
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


    //db값 얻어오기 useEffect
    useEffect(() => {
        getSubmits();
    }, []);

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