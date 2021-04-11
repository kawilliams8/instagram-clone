import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from "date-fns";
import AddComment from "./add-comment";

export default function Comments({ docId, allComments, posted, commentInput }){
  const [comments, setComments] = useState(allComments);
  return (
    <>
      <div className="p-4 pt-1 pb-4">
        {comments.length >= 2 && (
          <p className="text-sm text-gray-500 mb-1 cursor-pointer">
            View all {comments.length} comments
          </p>
        )}
        {comments.slice(0, 2).map((comment, i) => {
          return (
            <div key={i} className="mb-1">
              <Link to={`/p/${comment.displayName}`} className="font-bold pr-2">
                {comment.displayName}
              </Link>
              {comment.comment}
            </div>
          );
        })}
        <p className="text-gray-500 uppercase text-xs mt-2">
          {formatDistance(posted, new Date())} ago
        </p>
      </div>
      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </>
  );
}