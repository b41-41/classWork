import React from "react";
import { Route, Link } from "react-router-dom";
import NoticeList from 'routes/Notice/NoticeList';
import NoticeDetail from 'routes/Notice/NoticeDetail';
import NoticeSubmit from 'routes/Notice/NoticeSubmit';
import NotiSearchBar from 'component/NotiSearchBar';
import { DESKTOP_SIZE } from 'const/breakPoint';


const Notice = ({ match }) => {

    // 본 내용
    return (
        <>
            {(window.innerWidth > DESKTOP_SIZE) ?
                <>
                    {/* 데스크톱 버전 */}
                    {/* 중앙 레이아웃 */}
                    <div className="list">
                        <div className="listForm">
                            <Link to="/Notice">
                                <div className="currMenu">
                                    Notice
                                </div>
                            </Link>
                            {/* 숙제 리스트 부분 */}
                            <NoticeList />
                        </div>
                    </div>

                    {/* 우측 레이아웃 */}
                    <article>
                        <div className="articleForm">
                            <NotiSearchBar />
                            <Route exact path={`${match.path}`}><p>글을 선택해 주세요.</p></Route>
                            <Route
                                path={`${match.path}/:id`}
                                render={({ match }) => <NoticeDetail {...{ match }} />}
                            />
                            <Route
                                path={`${match.path}/:id/comment`}
                                render={({ match, userObj }) => <NoticeSubmit {...{ match, userObj }} />}
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
                            <Link to="/Notice">
                                <div className="currMenu">
                                    Notice
                                </div>
                            </Link>
                            {/* 숙제 리스트 부분 */}
                            <Route exact path={`${match.path}`} component={NoticeList} />
                        </div>
                    </div>

                    {/* 하단 레이아웃 */}
                    <article>
                        <div className="articleForm">
                            <Route
                                path={`${match.path}/:id`}
                                render={({ match }) => <NoticeDetail {...{ match }} />}
                            />
                            <Route
                                path={`${match.path}/:id/comment`}
                                render={({ match, userObj }) => <NoticeSubmit {...{ match, userObj }} />}
                            />
                        </div>
                    </article>
                </>
            }

        </>
    );

};

export default Notice;