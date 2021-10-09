import React from "react";
import { Route } from "react-router-dom";
import HomeworkList from 'routes/Homework/HomeworkList';
import HomeworkDetail from 'routes/Homework/HomeworkDetail';
import HomeworkSubmit from 'routes/Homework/HomeworkSubmit';
import NotiSearchBar from 'component/NotiSearchBar';


const Homework = ({ match, userObj }) => {

    // 본 내용
    return (
        <>
            {/* 중앙 레이아웃 */}
            <div className="list">
                <div className="listForm">
                    <div className="currMenu">
                        HOMEWORK
                    </div>
                    {/* 숙제 리스트 부분 */}
                    <HomeworkList />
                </div>
            </div>

            {/* 우측 레이아웃 */}
            <article>
                <div className="articleForm">
                    <NotiSearchBar />
                    <Route exact path={`${match.path}`}><p>메뉴를 선택하세요.</p></Route>
                    <Route
                        path={`${match.path}/:id`}
                        render={({ match }) => <HomeworkDetail {...{ match }} />}
                    />
                    <Route
                        path={`${match.path}/:id/submit`}
                        render={({ match, userObj }) => <HomeworkSubmit {...{ match, userObj }} />}
                    />
                </div>
            </article>
        </>
    );

};

export default Homework;