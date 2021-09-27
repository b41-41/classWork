import React from "react";

const Notice = () => {

    return (
        <>
            <div class="list">
                <div class="listForm">
                    <div class="currMenu">
                        NOTICE
                    </div>
                    <div class="boardForm">
                        <div class="boardListNumber">001</div>
                        <div class="boardListTitle">다음주 월요일부터 수요일까지는 쉽니다.</div>
                        <div class="boardListDate">2021.09.21</div>
                    </div>
                </div>
            </div>
            <article>
                <div class="articleForm">
                    <div class="notiBar">
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
                    </div>
                    <div class="homeworkTitleDate">
                        <div class="homeworkContentTitle">
                            다음주 월요일부터 수요일까지는 쉽니다.
                        </div>
                        <div class="homeworkDate">
                            2021.09.21
                        </div>
                    </div>
                    <div class="homeworkContents">
                        지난 주도 고생 많았습니다. 다음주에는 추석이 있기 때문에 수업을 쉽니다. 혹시 수업에 들어오지 않도록 주의 바랍니다.
                    </div>
                    <div class="replyForm">
                        <div class="replyFormL">
                            <img width="50px" src="./img/reply-message.png" alt="reply" class="replyImgStyle" />
                        </div>
                        <div class="replyFormR">
                            알겠습니다!!
                            <div class="name">
                                린짱
                            </div>
                        </div>

                    </div>

                </div>
            </article>
        </>
    );

};

export default Notice;