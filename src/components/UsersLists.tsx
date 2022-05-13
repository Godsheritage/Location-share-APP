import React from "react";
import { userItems, user } from "../types";
import Card from "./shared/UIElements/Card";
import UserItem from "./UserItem";

const UsersLists: React.FC<userItems> = ({ items }) => {
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
      {items.map((user: user["user"], index: number) => (
        <UserItem key={index} user={user} />
      ))}
    </ul>
  );
};

export default UsersLists;
