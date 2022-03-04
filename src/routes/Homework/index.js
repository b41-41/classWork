import React from "react";
import { Route, Link } from "react-router-dom";
import HomeworkList from 'routes/Homework/HomeworkList';
import HomeworkDetail from 'routes/Homework/HomeworkDetail';
import HomeworkSubmit from 'routes/Homework/HomeworkSubmit';
import NotiSearchBar from 'component/NotiSearchBar';
import { DESKTOP_SIZE } from 'const/breakPoint';


const Homework = ({ match }) => {

    // 본 내용
    return (
        <>
            {(window.innerWidth > DESKTOP_SIZE) ?
                <>
                    {/* 데스크톱 버전 */}
                    {/* 중앙 레이아웃 */}
                    <div className="list">
                        <div className="listForm">
                            <Link to="/Homework">
                                <div className="currMenu">
                                    HOMEWORK
                                </div>
                            </Link>
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
                :
                <>
                    {/* 모바일, 테블릿 버전 */}
                    {/* 상단 레이아웃 */}
                    <div className="list">
                        <div className="listForm">
                            <Link to="/Homework">
                                <div className="currMenu">
                                    HOMEWORK
                                </div>
                            </Link>
                            {/* 숙제 리스트 부분 */}
                            <Route exact path={`${match.path}`} component={HomeworkList} />
                        </div>
                    </div>

                    {/* 하단 레이아웃 */}
                    <article>
                        <div className="articleForm">
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
            }

        </>
    );

};

export default Homework;