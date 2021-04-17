import React, { useEffect, useState } from "react";
import useUser from '../../hooks/use-user';
import { User } from './user';

export default function Sidebar(){
    const { user: { docId, userId, following, username, fullName } = {}} = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
    </div>
  );
};