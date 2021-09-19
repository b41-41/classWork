import React from "react";
const Question = () => {

    return (
        <>
            <div class="list">
                <div class="listForm">
                    <div class="currMenu">
                        QUESTION
                    </div>
                    <div class="boardForm">
                        <div class="boardListNumber">001</div>
                        <div class="boardListTitle">선생님 안녕하세요.</div>
                        <div class="boardListDate">2021.09.13</div>
                        <div class="boardListWriter">린짱</div>
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
                            선생님 안녕하세요.
                        </div>
                        <div class="homeworkDate">
                            2021.09.13
                        </div>
                    </div>
                    <div class="homeworkContents">
                        이번 수업에 빠져서 질문이 있는데요.<br />
                        'V-(으)ㄹ만 하다'는 'V-(으)면 좋다'와 의미가 같나요?
                        <div class="name">
                            린짱
                        </div>
                    </div>
                    <div class="replyForm">
                        <div class="replyFormL">
                            <img width="50px" src="./img/reply-message.png" alt="reply" class="replyImgStyle" />
                        </div>
                        <div class="replyFormR">
                            의미가 조금 달라요.
                            <div class="name">
                                선생님
                            </div>
                        </div>

                    </div>

                </div>
            </article>
        </>
    );

};

export default Question;