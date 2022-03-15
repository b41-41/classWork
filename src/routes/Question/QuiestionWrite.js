import React, { useState, useEffect } from 'react';
import { dbService, authService } from 'fbase';
import { useSelector } from "react-redux";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { useHistory } from 'react-router-dom';

const QuestionWrite = () => {
    const QUESTION = 'question';
    const UID = authService.currentUser.uid;

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [docsData, setDocsData] = useState([]);

    const userState = useSelector((state) => state.userInfo);
    const userInfo = userState.user;

    const loadCollection = collection(dbService, "question");

    const getLatestNum = async () => {
        //마지막 작성 글 번호 가져오기
        const readDocSnap = await getDocs(loadCollection);
        readDocSnap.forEach(doc => {
            const docs = {
                ...doc.data(),
            }
            setDocsData((prev) => [docs, ...prev])
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                title,
                content,
                createAt: Timestamp.fromDate(new Date()),
                number: docsData[0].number + 1,
                writer: userInfo.displayName,
                uid: UID,
            }
            //숙제 내용 DB에 작성
            const addDocRef = await addDoc(loadCollection, data);
            console.log("Document written with ID: ", addDocRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setContent('');
        setTitle('');
        window.location.replace(`/${QUESTION}`);
    };

    const onChangeTitle = (e) => {
        const { target: { value } } = e;
        setTitle(value);
    };

    const onChangeContent = (e) => {
        const { target: { value } } = e;
        setContent(value);
    };

    useEffect(() => {
        getLatestNum()
    }, [])


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