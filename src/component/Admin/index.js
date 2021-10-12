import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import NotiSearchBar from 'component/NotiSearchBar';

const Admin = ({ match }) => {
    <>
        {/* 데스크톱 버전 */}
        {/* 중앙 레이아웃 */}
        {console.log(match)}
        <div className="list">
            <div className="listForm">
                <Link to="/Admin">
                    <div className="currMenu">
                        ADMIN
                    </div>
                </Link>
                {/* 숙제 리스트 부분 */}
                <div className="list"></div>
            </div>
        </div>

        {/* 우측 레이아웃 */}
        <article>
            <div className="articleForm">
                <NotiSearchBar />
                <Route exact path={`${match.path}`}><p>관리자?!</p></Route>
            </div>
        </article>
    </>
}

export default Admin;