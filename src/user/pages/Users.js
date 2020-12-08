import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Michael Neumann",
      image:
        "https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-600w-439433326.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
