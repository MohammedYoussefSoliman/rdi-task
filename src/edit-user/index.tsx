import React from "react";
import UserForm from "components/UserForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "app/functions";
import { RootState } from "app/Store";

export default function AddUser() {
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.users);
  const user = React.useMemo(
    () => getUser(users, id ? +id : undefined),
    [id, users],
  );

  return <UserForm user={user} />;
}
