import React from "react";

const Study = () => {

    return (
        <>
            <div class="list">
                <div class="listForm">
                    <div class="currMenu">
                        STUDY
                    </div>
                    <div class="homeworkListForm">
                        <div class="homeworkListForm_l">
                            <div class="homeworkListDate">
                                09/18
                            </div>
                        </div>
                        <div class="homeworkListForm_r">
                            <div class="homeworkListTag">
                                3과
                            </div>
                            <div class="homeworkListTitle">
                                어휘 읽기
                            </div>
                            <div class="homeworkListTitle">
                                수라바야는 어디에 있어요?
                            </div>
                            <div class="homeworkListMTag">
                                📚 pp.126-129
                            </div>
                        </div>
                    </div>
                    <div class="homeworkListForm2">
                        <div class="homeworkListForm_l">
                            <div class="homeworkListDate">
                                09/13
                            </div>
                        </div>
                        <div class="homeworkListForm_r2">
                            <div class="homeworkListTag">
                                2과
                            </div>
                            <div class="homeworkListTitle">
                                문법 쓰기
                            </div>
                            <div class="homeworkListTitle">
                                너무 좋은 날이에요.
                            </div>
                            <div class="homeworkListMTag2">
                                📚 pp.110-113
                            </div>
                        </div>
                    </div>
                    <div class="homeworkListForm">
                        <div class="homeworkListForm_l">
                            <div class="homeworkListDate">
                                09/05
                            </div>
                        </div>
                        <div class="homeworkListForm_r">
                            <div class="homeworkListTag">
                                1과
                            </div>
                            <div class="homeworkListTitle">
                                말하기 듣기
                            </div>
                            <div class="homeworkListTitle">
                                오늘은 어디에 갈까요?
                            </div>
                            <div class="homeworkListMTag">
                                📚 pp.96-99
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <article>
                <div class="articleForm">
                    <div class="noti_search">
                        <div class="noti_search_n">
                            <span class="icon2">
                                <img width="20px" src='./img/notification.png' alt="notification" />
                            </span>
                        </div>
                        <div class="noti_search_s">
                            <span class="icon2">
                                <img width="20px" src='./img/search.png' alt="search" />
                            </span>
                            <span class="search">
                                <input placeholder="Search for anything" />
                            </span>
                        </div>
                    </div>
                    <div class="homeworkTitleDate">
                        <div class="homeworkContentTitle">
                            문법 쓰기: 너무 좋은 날이에요.
                        </div>
                        <div class="homeworkDate">
                            2021.09.13
                        </div>
                    </div>
                    <div class="homeworkContents">
                        이 수업에서는 날씨와 취미 생활에 대해서 배웠습니다.<br />
                        자세한 내용은 책을 확인하세요.<br />
                        날씨 어휘: 비, 번개, 바람, 태풍
                        <div class="homeworkListMTag">
                            📚 pp.110-113
                        </div>
                    </div>

                </div>
            </article>
        </>
    );

};

export default Study;