import React from "react";
import { Route, Link } from "react-router-dom";
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import QuestionSubmit from './QuestionSubmit';
import NotiSearchBar from 'component/NotiSearchBar';
import QuestionWrite from './QuiestionWrite';
import { DESKTOP_SIZE } from 'const/breakPoint';
import { ChangeCurrentMenu } from 'redux/utils';


const Question = ({ match }) => {
    ChangeCurrentMenu("QUESTION");

    // 본 내용
    return (
        <>
            {(window.innerWidth > DESKTOP_SIZE) ?
                <>
                    {/* 데스크톱 버전 */}
                    {/* 중앙 레이아웃 */}
                    <div className="list">
                        <div className="listForm">
                            <Link to="/Question">
                                <div className="currMenu">
                                    Question
                                </div>
                            </Link>
                            {/* 숙제 리스트 부분 */}
                            <QuestionList />
                        </div>
                    </div>

                    {/* 우측 레이아웃 */}
                    <article>
                        <div className="articleForm">
                            <NotiSearchBar />
                            <Route exact path={`${match.path}`}><p>글을 선택해 주세요.</p></Route>
                            <Route
                                exact path={`${match.path}/write`}
                                render={({ match }) => <QuestionWrite {...{ match }} />}
                            />
                            <Route
                                path={`${match.path}/:id`}
                                render={({ match }) => <QuestionDetail {...{ match }} />}
                            />
                            <Route
                                path={`${match.path}/:id/comment`}
                                render={({ match, userObj }) => <QuestionSubmit {...{ match, userObj }} />}
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
                            <Link to="/Question">
                                <div className="currMenu">
                                    Question
                                </div>
                            </Link>
                            {/* 숙제 리스트 부분 */}
                            <Route exact path={`${match.path}`} component={QuestionList} />
                        </div>
                    </div>

                    {/* 하단 레이아웃 */}
                    <article>
                        <div className="articleForm">
                            <Route
                                path={`${match.path}/write`}
                                render={({ match }) => <QuestionWrite {...{ match }} />}
                            />
                            <Route
                                path={`${match.path}/:id`}
                                render={({ match }) => <QuestionDetail {...{ match }} />}
                            />
                            <Route
                                path={`${match.path}/:id/comment`}
                                render={({ match, userObj }) => <QuestionSubmit {...{ match, userObj }} />}
                            />
                        </div>
                    </article>
                </>
            }

        </>
    );

};

export default Question;