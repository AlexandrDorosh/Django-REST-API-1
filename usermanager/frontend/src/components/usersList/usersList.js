import React, { Fragment } from "react";

//Component
import UserItem from "./userItem/userItem";

const UsersList = ({ UsersList }) => {
  const item = UsersList.map((item) => {
    // console.log("Item => ", item);
    return (
      <UserItem
        key={item.id}
        id={item.id}
        name={item.name}
        email={item.email}
        message={item.message}
        created_at={item.created_at}
      />
    );
  });
  return (
    <Fragment>
      <div className="outer-container">
        <h1>User Manager Table</h1>
        {item}
      </div>
    </Fragment>
  );
};
export default UsersList;
