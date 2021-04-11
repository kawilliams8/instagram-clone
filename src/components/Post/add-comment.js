import React, { useState, useContext } from "react";
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComment({ docId, comments, setComments, commentInput}) {
  const [comment, setComment] = useState('');
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    const displayName = user.displayName;
    setComments([{ displayName, comment }, ...comments]);
    setComment('');

    return firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  };

  return (
    <div className="border-t border-gray">
      <form className="flex w-full justify-between border-gray">
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray w-full mr-3 py-3 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-500 mr-5 ${!comment && "opacity-25"}`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}
