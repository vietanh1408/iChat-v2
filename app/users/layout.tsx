import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();
  console.log("📢[layout.tsx:8]: users: ", users);

  return (
    <Sidebar>
      <div className="h-full">
        <UserList users={users!} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;
