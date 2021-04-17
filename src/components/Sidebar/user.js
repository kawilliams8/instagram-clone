import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const User = ({ username, fullName}) => {

  return (
  !username || !fullName ? (
    <>
      <Skeleton count={1} height={61} />
    </>
  ) : (
    <Link to={`/p/${username}`} className="grid -grid-cols-4 gap-4 mb-4 items-center">
      <p>{username}</p>
    </Link>
  )
  )
}

export default User;