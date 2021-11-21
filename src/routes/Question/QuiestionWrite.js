import React, { useState } from 'react';

const QuestionWrite = () => {

    const [content, setContent] = useState('');

    const onSubmit = () => {

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
        </>
    )
}

export default QuestionWrite;