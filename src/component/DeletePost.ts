import { doc, deleteDoc } from "firebase/firestore";
import { dbService } from 'fbase';

const DeleteComment = async (menuId: string, postId: string): Promise<void> => {
    const commentRef = doc(dbService, menuId, postId);
    await deleteDoc(commentRef);
    alert('삭제완료');
    window.location.replace(`/${menuId}`);
};

export default DeleteComment;