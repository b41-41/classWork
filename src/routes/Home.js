import React from "react";

const Home = () => {
    return (
        <>
            <div class="list">
                <div class="listForm">
                    <div class="currMenu">
                        MY CLASSES
                    </div>
                    <div class="listClassName">
                        한국어센터 1급 2반
                    </div>
                    <div class="teacherForm">
                        <div class="teacherPhoto">
                            <img class="teacherJPG" width="auto" width="150px" src="./img/teacher.png" alt="teacher" />
                        </div>
                        <div class="teacherInfo">
                            <span class="teacherTag">NAME</span><br />
                            <span class="teacherContent">정다빈</span><br />
                            <span class="teacherTag">E-MAIL</span><br />
                            <span class="teacherContent">malgolil41@gmail.com</span><br />
                            <span class="teacherTag2">
                                <img height="10px" src='./img/mail.png' />
                                Send Message
                            </span>
                        </div></div>
                    <h2>NOTICE & HOMEWORK</h2>
                    <div class="nnhForm">
                        <div class="notiForm">
                            <div class="noticeTitle">
                                다음주 월요일부터 수요일까지는 쉽니다.
                                <span class="notiDate">2021.09.21</span>
                            </div>
                            <div class="noticeContent">
                                지난 주도 고생 많았습니다.다음주에는 추석이 있기 때문에 수업을 쉽니다.혹시 수업에 들어오지 않도록 주의 바랍니다.
                            </div>
                            <div class="noticeTitle">
                                반갑습니다 여러분
                                <span class="notiDate">2021.09.21</span>
                            </div>
                            <div class="noticeContent">
                                저는 선생님입니다.여러분과 만나뵙게 되어서 정말 반갑습니다.잘 부탁합니다.
                            </div>
                        </div>
                        <div class="homework">
                            <div class="homeworkColumn1">
                                말하기 숙제<br />
                                <span class="hwDate">2021.09.21</span>
                            </div>
                            <div class="homeworkColumn2">
                                쓰기 숙제<br />
                                <span class="hwDate">2021.09.21</span>
                            </div>
                        </div>
                    </div>
                    <h2>CALENDER</h2>
                    <div class="calender">
                        달력
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
                    <h2>LAST CLASS</h2>
                    <div class="lastClass">
                        <div class="lastClass_icon">
                            <img height="100px" src='./img/class.png' alt="next class" />
                        </div>
                        <div class="lastClass_content">
                            <span class="class_title">지난 수업</span>
                            <span class="class_contents">수업내용</span>
                        </div>
                    </div>
                    <h2>NEXT CLASS</h2>
                    <div class="nextClass">
                        <div class="nextClass_content">
                            <span class="class_title">지난 수업</span>
                            <span class="class_contents">수업내용</span>
                        </div>
                        <div class="nextClass_icon">
                            <img height="100px" src='./img/nextclass.png' alt="next class" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Home;