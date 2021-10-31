import React, { useState } from "react";
import { dbService, authService } from 'fbase';
import { collection, addDoc } from "firebase/firestore";

const NoticeSubmit = ({ match, userObj }) => {
    const [submit, setSubmit] = useState("");

    const NoticeID = match.params.id;
    const UID = authService.currentUser.uid;

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                text: submit,
                data: Date.now(),
                uid: UID
            }
            const loadCollection = collection(dbService, "notice", NoticeID, "submit");

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

export default NoticeSubmit;