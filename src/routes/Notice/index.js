import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import NoticeList from 'routes/Notice/NoticeList';
import NoticeDetail from 'routes/Notice/NoticeDetail';
import NoticeSubmit from 'routes/Notice/NoticeSubmit';
import NotiSearchBar from 'component/NotiSearchBar';
import { DESKTOP_SIZE } from 'const/breakPoint';
import { ChangeCurrentMenu } from 'redux/utils';

const Notice = ({ match }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    ChangeCurrentMenu("NOTICE");

    const handleResize = () => {
        setInnerWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            {/* 중앙 레이아웃 */}
            <div className="list">
                <div className="listForm">
                    <Link to="/Notice">
                        <div className="currMenu">
                            Notice
                        </div>
                    </Link>
                    {/* 숙제 리스트 부분 */}
                    {innerWidth > DESKTOP_SIZE ? <NoticeList /> : <Route exact path={`${match.path}`} component={NoticeList} />}

                </div>
            </div>

            {/* 우측 레이아웃 */}
            <article>
                <div className="articleForm">
                    {innerWidth > DESKTOP_SIZE &&
                        <>
                            <NotiSearchBar />
                            <Route exact path={`${match.path}`}><p>글을 선택해 주세요.</p></Route>
                        </>
                    }

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
    );

};

export default Notice;