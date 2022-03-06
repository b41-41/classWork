import React, { useState } from "react";
import { dbService, authService } from 'fbase';
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";

const QuestionSubmit = ({ match, userObj }) => {
    const [submit, setSubmit] = useState("");

    const QuestionID = match.params.id;
    const UID = authService.currentUser.uid;
    const userState = useSelector((state) => state.userInfo);
    const userInfo = userState.userInfo;
    console.log('userInfo', userInfo)

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                content: submit,
                data: Date.now(),
                uid: UID,
                writer: userInfo.displayName,
                avatar: userInfo.reloadUserInfo.photoUrl,
            }
            const loadCollection = collection(dbService, "question", QuestionID, "reply");

            //숙제 내용 DB에 작성
            const docRef = await addDoc(loadCollection, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setSubmit("");
    }

    const onChange = (event) => {
        const { target: { value }, } = event;
        setSubmit(value);
    };

    return (
        <>
            {console.log(match.params.id)}
            <form className="HomeworkSubmitTextArea" onSubmit={onSubmit}>
                <textarea
                    className="HomeworkSubmitTextArea__textarea"
                    value={submit}
                    onChange={onChange}
                    type="text"
                    placeholder="내용을 입력하세요."
                    autoFocus
                />
                <input className="HomeworkSubmitTextArea__button" type="submit" value="제출" />
            </form>
        </>
    )
}

export default QuestionSubmit;