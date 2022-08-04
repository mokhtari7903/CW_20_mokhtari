import React from "react";
import UserCard from "../../Compontnts/UserCard";
import { ICard } from "../../Compontnts/UserCard";
import { getUsers } from "api";

function Index() {
  const [users, setUsers] = React.useState<ICard[]>([]);

  React.useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} id={user.id} name={user.name} email={user.email} avatar={user.avatar} balance={user.balance} wallet={user.wallet} />
      ))}
      email
    </>
    // <div>users</div>
  );
}

export default Index;
