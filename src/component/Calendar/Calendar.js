import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {

    const [dateValue, setDateValue] = useState({
        year: new Date().getFullYear(),
        month: (new Date().getMonth() + 1)
    });
    const [selectedDate, setSelectedDate] = useState({ year: "", month: "", day: "" });

    const date = new Date();
    const prevEndDay = new Date(dateValue.year, dateValue.month - 1, 0).getDate();
    const today = date.getDate();
    const endDay = new Date(dateValue.year, dateValue.month, 0).getDate();

    const startDayIndex = new Date(dateValue.year, dateValue.month - 1, 0).getDay();
    const lastDayIndex = new Date(dateValue.year, dateValue.month, -1).getDay();

    const prevYear = () => {
        if (dateValue.month === 1) {
            return dateValue.year - 1;
        } else {
            return dateValue.year;
        };
    };

    const nextYear = () => {
        if (dateValue.month === 12) {
            return dateValue.year + 1;
        } else {
            return dateValue.year;
        };
    };

    const prevMonth = () => {
        if (dateValue.month === 1) {
            return 12;
        }
        return dateValue.month - 1;
    };

    const nextMonth = () => {
        if (dateValue.month === 12) {
            return 1;
        }
        return dateValue.month + 1;
    };

    const clickedEvent = (e) => {
        const eventId = e.target.id;
        if (eventId === `${selectedDate.year}.${selectedDate.month}.${selectedDate.day}`) {
            e.target.classList.remove('day__select');
            setSelectedDate('');
        } else {
            cancleSelect();
            e.target.classList.add('day__select');
            e.target.focus();
            const eventSplit = eventId.split('.');
            setSelectedDate({ year: eventSplit[0], month: eventSplit[1], day: eventSplit[2] });
        }
    };

    const clickedEventPrev = (e) => {
        clickedEvent(e);
        switchPrevMonth();
    }

    const clickedEventNext = (e) => {
        clickedEvent(e);
        switchNextMonth();
    }

    const cancleSelect = () => {
        document.querySelectorAll('.day div').forEach(x => x.classList.remove('day__select'));
    }

    const returnPrevDaysArray = (year, month) => {
        let prevDaysArray = [];
        for (let x = startDayIndex; x > 0; x--) {
            prevDaysArray.push(
                <div
                    id={`${year}.${month}.${(prevEndDay - x) + 1}`}
                    className="day__prev"
                    onClick={clickedEventPrev}
                    tabIndex="-1">
                    {(prevEndDay - x) + 1}
                </div>
            );
        };
        return prevDaysArray;
    };

    const returnDaysArray = (year, month) => {
        let daysArray = [];
        for (let i = 1; i <= endDay; i++) {
            if (month === new Date().getMonth() + 1 && year === new Date().getFullYear()) {
                i === today ?
                    daysArray.push(<div id={`${year}.${month}.${i}`} className="day__today" onClick={clickedEvent} tabIndex="-1">{i}</div>)
                    : daysArray.push(<div id={`${year}.${month}.${i}`} onClick={clickedEvent} tabIndex="-1">{i}</div>)
            } else {
                daysArray.push(<div id={`${year}.${month}.${i}`} onClick={clickedEvent} tabIndex="-1">{i}</div>)
            }
        };
        return daysArray;
    };

    const returnNextDaysArray = (year, month) => {
        const nextDaysLength = 6 - lastDayIndex;
        let nextDaysArray = [];
        for (let j = 1; j <= nextDaysLength; j++) {
            nextDaysArray.push(<div id={`${year}.${month}.${j}`} className="day__next" onClick={clickedEventNext} tabIndex="-1">{j}</div>)
        };
        return nextDaysArray;
    };

    const switchPrevMonth = () => {
        if (dateValue.month === 1) {
            setDateValue({ ...dateValue, month: 12, year: dateValue.year - 1 });
        } else {
            setDateValue({ ...dateValue, month: dateValue.month - 1 });
        };
    };

    const switchNextMonth = () => {
        if (dateValue.month === 12) {
            setDateValue({ ...dateValue, month: 1, year: dateValue.year + 1 });
        } else {
            setDateValue({ ...dateValue, month: dateValue.month + 1 });
        };
    };

    const switchCurrentMonth = () => {
        setDateValue({ ...dateValue, year: new Date().getFullYear(), month: (new Date().getMonth()) + 1 });
    }


    useEffect(() => {
        const selectedDatePrint = () => {
            cancleSelect();
            document.querySelectorAll('.day div').forEach(date => {
                if (date.id === `${selectedDate.year}.${selectedDate.month}.${selectedDate.day}`) {
                    date.classList.add('day__select');
                    date.focus();
                }
            });
        };

        selectedDatePrint()
    }, [dateValue.month]);

    return (
        <div className="wrapper">
            <div className="calendar">
                <div className="month">
                    <div className="month__current">{`${dateValue.year}.${dateValue.month}`}</div>
                    <button className="month__handle" onClick={switchPrevMonth} value="지난달">{`<`}</button>
                    <button className="month__handle" onClick={switchNextMonth} value="다음 달">{`>`}</button>
                    <button className="month__returnCurrent" onClick={switchCurrentMonth} value="이번 달">이번 달</button>
                </div>
                <div className="week">
                    <div>월</div>
                    <div>화</div>
                    <div>수</div>
                    <div>목</div>
                    <div>금</div>
                    <div>토</div>
                    <div>일</div>
                </div>
                <div className="day">
                    {returnPrevDaysArray(prevYear(), prevMonth())}
                    {returnDaysArray(dateValue.year, dateValue.month)}
                    {returnNextDaysArray(nextYear(), nextMonth())}
                </div>

            </div>
        </div>
    )
}

export default Calendar;