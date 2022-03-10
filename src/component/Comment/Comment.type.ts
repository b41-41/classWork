export type CommentType = {
  comments: {
    avatar: string;
    content: string;
    createAt: Date;
    writer: string;
    id: string;
    uid: string;
  }[];
  uid: string;
  menuId: string;
  postId: string;
};
