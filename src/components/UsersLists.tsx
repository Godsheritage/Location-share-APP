import React from "react";
import { userItemTypes } from "../types";
import Card from "./shared/UIElements/Card";
import UserItem from "./UserItem";

const UsersLists: React.FC<any> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>no users found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {items.map((user: userItemTypes, index: any) => (
        <UserItem key={index} user={user} />
      ))}
    </ul>
  );
};

export default UsersLists;
