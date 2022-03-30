import { User } from "helpers/types";

const getUser = (users: User[], id?: number) => {
  if (id) {
    return users.find((user) => user.id === id);
  }
  return undefined;
};

export default getUser;
