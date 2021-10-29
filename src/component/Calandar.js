import React from 'react';
import '../css/calandar.css';


const Calandar = () => {
    return (
        <>
            <div className="calandar">
                <div className="today">
                    <div>{'<'}</div>
                    <div>
                        <h1>십일월</h1>
                        <p>2021년 10월 23일 금요일</p>
                    </div>
                    <div>{'>'}</div>
                </div>
                <div className="week">
                    <div>일</div>
                    <div>월</div>
                    <div>화</div>
                    <div>수</div>
                    <div>목</div>
                    <div>금</div>
                    <div>토</div>
                </div>
                <div className="date">
                    <div className="prev-date">26</div>
                    <div className="prev-date">27</div>
                    <div className="prev-date">28</div>
                    <div className="prev-date">29</div>
                    <div className="prev-date">30</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>10</div>
                    <div>10</div>
                    <div>10</div>
                    <div>10</div>
                    <div>10</div>
                    <div>10</div>
                    <div>10</div>
                    <div>10</div>
                    <div>10</div>
                    <div>10</div>
                    <div>20</div>
                    <div>20</div>
                    <div>20</div>
                    <div>20</div>
                    <div>20</div>
                    <div>20</div>
                    <div>20</div>
                    <div>20</div>
                    <div>20</div>
                    <div>20</div>
                    <div>30</div>
                    <div>31</div>
                    <div clasName="next-date">1</div>
                    <div clasName="next-date">2</div>
                    <div clasName="next-date">3</div>
                    <div clasName="next-date">4</div>
                    <div clasName="next-date">5</div>
                    <div clasName="next-date">6</div>
                </div>
            </div>

        </>
    )

}

export default Calandar;