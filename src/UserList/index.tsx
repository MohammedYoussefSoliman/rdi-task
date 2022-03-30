import React from "react";
import { Container } from "components/Containers";
import LoadingScreen from "components/LoadingScreen";
import { useSelector, useDispatch } from "react-redux";
import Card from "components/Card";
import useHttp from "app/hooks/useHTTP";
import { setUsers } from "app/State/usersSlice";
import { RootState } from "app/Store";
import { User } from "helpers/types";
import Wrapper from "./styles";

export default function UserList() {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const setUsersData = React.useCallback(
    (data: any) => {
      const usersData: User[] = data.map((userData: any) => ({
        id: userData.id,
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
        website: userData.website,
      }));
      dispatch(setUsers(usersData));
    },
    [dispatch],
  );

  const { isLoading } = useHttp({
    endPoint: "users",
    callBack: setUsersData,
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <Container>
      <Wrapper>
        {users.map((user) => (
          <Card key={user.name} {...user} />
        ))}
      </Wrapper>
    </Container>
  );
}
