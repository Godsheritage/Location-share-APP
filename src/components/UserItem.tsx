import React from "react";
import Avatar from "./shared/UIElements/Avatar";

const UserItem: React.FC<any> = ({ user }) => {
  const image = {
    image: "",
    alt: "",
    width: "",
  };

  return (
    <li className="user-item">
      <div className="user-item__coinfos">
        <div className="user-item__image">
          <Avatar infos={image} />
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
