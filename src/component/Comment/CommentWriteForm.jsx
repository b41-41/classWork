import React, { useState } from 'react'
import { dbService, authService } from 'fbase';
import { collection, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

const CommentWriteForm = ({menu, menuId, postId}) => { //question 메뉴인 경우 menu에는 "question"을 넣을 것
    const [submit, setSubmit] = useState("");
    
    const history = useHistory();
    const UID = authService.currentUser.uid;
    const userState = useSelector((state) => state.userInfo);
    const userInfo = userState.userInfo;

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                content: submit,
                createAt: Date.now(),
                uid: UID,
                writer: userInfo.displayName,
                avatar: userInfo.reloadUserInfo.photoUrl,
            }
            const loadCollection = collection(dbService, menuId, postId, "reply");
            const docRef = await addDoc(loadCollection, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setSubmit("");
        history.push(`/${menu}/${postId}/`);
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
                    placeholder="내용을 입력하세요."
                    autoFocus
                />
                <input className="HomeworkSubmitTextArea__button" type="submit" value="제출" />
            </form>
        </>
    )
}

export default CommentWriteForm