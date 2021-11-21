import React, { useState } from 'react';
import { dbService, authService } from 'fbase';
import { collection, addDoc } from "firebase/firestore";

const QuestionWrite = () => {
    const UID = authService.currentUser.uid;

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                title: title,
                text: content,
                data: Date.now(),
                uid: UID
            }
            const loadCollection = collection(dbService, "question");

            //숙제 내용 DB에 작성
            const docRef = await addDoc(loadCollection, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setContent('');
        setTitle('');
    };

    const onChangeTitle = (e) => {
        const { target: { value } } = e;
        setTitle(value);
    };

    const onChangeContent = (e) => {
        const { target: { value } } = e;
        setContent(value);
    };


    return (
        <>
            <form className="HomeworkSubmitTextArea" onSubmit={onSubmit}>

                <textarea
                    className="HomeworkSubmitTextArea__title"
                    value={title}
                    onChange={onChangeTitle}
                    type="text"
                    placeholder="제목"
                    autoFocus
                />
                <textarea
                    className="HomeworkSubmitTextArea__textarea"
                    value={content}
                    onChange={onChangeContent}
                    type="text"
                    placeholder="내용을 입력하세요."
                    autoFocus
                />
                <input className="HomeworkSubmitTextArea__button" type="submit" value="제출" />
            </form>
        </>
    )
}

export default QuestionWrite;