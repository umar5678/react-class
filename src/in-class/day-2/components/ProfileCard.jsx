// name
// course
// join date
// isIOnline

import React from "react";
import Badge from "./Badge";

const ProfileCard = ({
  name = "user",
  course = "Javascript",
  joinDate = "12-12-2022",
  isOnline = true,
}) => {
    
  const status = isOnline ? "success" : "warning";
  const statusText = isOnline ? "Online" : "Offline";

  return (
    <div className="p-4 border rounded-xl m-4 max-w-64">
      <h3 className="py-2 text-xl font-bold">{name}</h3>
      <p className="py-2 text-xl font-semibold">Enrolled in: {course}</p>
      <p className=" text-sm font-bold">Joined: {joinDate}</p>
      <div className="my-4">
        <Badge status={status} statusText={statusText} />
      </div>
    </div>
  );
};

export default ProfileCard;
