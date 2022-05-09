import React from "react";

const UserItem: React.FC<any> = ({ user }) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={user.image} alt={user.name} />
        </div>
        <div className="user-item__info">
          <h2>{user.name}</h2>
          <h3>
            {user.places} {user.places === 1 ? "place" : "places"}{" "}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
