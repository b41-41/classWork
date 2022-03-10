import { doc, deleteDoc } from "firebase/firestore";
import { dbService } from 'fbase';

const deleteComment = async (menuId: string, postId: string, commentId: string): Promise<void> => {
    const commentRef = doc(dbService, menuId, postId, "reply", commentId);
    await deleteDoc(commentRef);
    alert('삭제완료');
    window.location.reload();
};

export default deleteComment;