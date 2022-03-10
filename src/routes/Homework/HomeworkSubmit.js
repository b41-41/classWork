import React, { useState, useEffect } from "react";
import { dbService, authService } from 'fbase';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from 'react-router-dom';

const HomeworkSubmit = ({ match }) => {
    //라우터
    const history = useHistory();
    const location = useLocation();
    //상태
    const [submit, setSubmit] = useState("");
    const userState = useSelector((state) => state.userInfo);
    const userInfo = userState.userInfo;
    // const HWId = match.params.id;
    const { HWSubmitCheck } = location.state;
    //값
    const HomeworkID = match.params.id;
    const UID = authService.currentUser.uid;
    // database
    const loadDoc = doc(dbService, "homework", HomeworkID, "submit", UID); //숙제 내용이 들어갈 데이터베이스 위치

    //이전 작성 내용 읽어오기
    const setPrevHW = async () => {
        try {
            const getPrevHW = await getDoc(loadDoc);
            setSubmit(getPrevHW.data().text);
        } catch (e) {
            console.error("이전 숙제 내용 가져오기 오류 : ", e);
        }
    };



    useEffect(() => {
        HWSubmitCheck && setPrevHW();
    }, []);

    //submit handler
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {      //데이터베이스에 들어갈 내용
                name: userInfo.displayName,
                text: submit,
                createAt: Date.now(),
                uid: UID
            }
            await setDoc(loadDoc, data); //숙제 내용 DB에 작성
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setSubmit(""); //입력폼 초기화
        history.goBack();
    }

    const onChange = (event) => {
        const { target: { value }, } = event;
        setSubmit(value);
    };

    return (
        <>
            <form className="HomeworkSubmitTextArea" onSubmit={onSubmit}>
                <textarea
                    className="HomeworkSubmitTextArea__textarea"
                    value={submit}
                    onChange={onChange}
                    type="text"
                    placeholder="숙제 내용을 입력해 주세요."
                    autoFocus
                />
                <input className="HomeworkSubmitTextArea__button" type="submit" value="제출" />
            </form>
        </>
    )
}

export default HomeworkSubmit;