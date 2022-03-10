import React from "react";
import { Route, Link } from "react-router-dom";
import StudyList from './StudyList';
import NotiSearchBar from 'component/NotiSearchBar';
import StudyDetail from './StudyDetail';
import { DESKTOP_SIZE } from 'const/breakPoint';
import { ChangeCurrentMenu } from 'redux/utils';

const Study = ({ match }) => {
    ChangeCurrentMenu("STUDY");

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