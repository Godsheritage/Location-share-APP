import React from "react";
import { Link } from "react-router-dom";
import Card from "./shared/UIElements/Card";
import Avatar from "./shared/UIElements/Avatar";

const UserItem: React.FC<any> = ({ user }) => {
  // const image = {
  //   image : {user.image},
  //   alt : ''
  //   style : ''

  // }
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${user.id}/places`}>
          <div className="user-item__image">
            <Avatar infos={user} />
          </div>
          <div className="user-item__info">
            <h2>{user.name}</h2>
            <h3>
              {user.places} {user.places === 1 ? "place" : "places"}{" "}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
