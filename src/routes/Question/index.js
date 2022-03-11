import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import QuestionSubmit from './QuestionSubmit';
import NotiSearchBar from 'component/NotiSearchBar';
import QuestionWrite from './QuiestionWrite';
import { DESKTOP_SIZE } from 'const/breakPoint';
import { ChangeCurrentMenu } from 'redux/utils';

const Question = ({ match }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    ChangeCurrentMenu("QUESTION");

    const handleResize = () => {
        setInnerWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    // 본 내용
    return (

        <>
            {/* 중앙 레이아웃 */}
            <div className="list">
                <div className="listForm">
                    <Link to="/Question">
                        <div className="currMenu">
                            Question
                        </div>
                    </Link>
                    {/* 숙제 리스트 부분 */}
                    {innerWidth > DESKTOP_SIZE ? <QuestionList /> : <Route exact path={`${match.path}`} component={QuestionList} />}
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

    );

};

export default Question;