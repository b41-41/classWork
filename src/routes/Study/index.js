import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import StudyList from './StudyList';
import NotiSearchBar from 'component/NotiSearchBar';
import StudyDetail from './StudyDetail';
import { DESKTOP_SIZE } from 'const/breakPoint';
import { ChangeCurrentMenu } from 'redux/utils';

const Study = ({ match }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    ChangeCurrentMenu("STUDY");

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
            <div class="list">
                <div class="listForm">
                    <Link to="/Study">
                        <div class="currMenu">
                            STUDY
                        </div>
                    </Link>
                    {innerWidth > DESKTOP_SIZE ? <StudyList /> : <Route exact path={`${match.path}`} component={StudyList} />}
                </div>
            </div>
            <article>
                <div className="articleForm">
                    {innerWidth > DESKTOP_SIZE &&
                        <>
                            <NotiSearchBar />
                            <Route exact path={`${match.path}`}><p>메뉴를 선택하세요.</p></Route>
                        </>
                    }
                    <Route
                        path={`${match.path}/:id`}
                        render={({ match }) => <StudyDetail {...{ match }} />}
                    />
                </div>
            </article>
        </>
    );

};

export default Study;