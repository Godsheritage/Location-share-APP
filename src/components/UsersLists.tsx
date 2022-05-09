import React from "react";
import { userItemTypes } from "../types";
import UserItem from "./UserItem";

const UsersLists: React.FC<any> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>no users found</h2>
      </div>
    );
  }
  return (
    <ul>
      {items.map((user: userItemTypes, index: any) => (
        <UserItem key={index} user={user} />
      ))}
    </ul>
  );
};

export default UsersLists;
