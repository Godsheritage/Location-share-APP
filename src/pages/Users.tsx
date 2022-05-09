import React from "react";
import UsersLists from "../components/UsersLists";

const Users = () => {
  const items = [
    {
      image: "https://unsplash.com/photos/Wb8OEa-HVmg",
      name: "Godsheritage Adeoye",
      places: 3,
    },
  ];

  return (
    <div>
      <UsersLists items={items} />
    </div>
  );
};

export default Users;
