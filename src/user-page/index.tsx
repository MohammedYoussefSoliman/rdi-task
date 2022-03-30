import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Flex, Container } from "components/Containers";
import ConfirmModal from "components/ConfirmModal";
import Snackbar from "components/Snackbar";
import useHttp from "app/hooks/useHTTP";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "app/State/usersSlice";
import { getUser } from "app/functions";
import { RootState } from "app/Store";
import { EmailIcon, PhoneIcon, GlobeIcon } from "assets/svgs";
import { Wrapper, Title, Subtitle, Anchor, Button } from "./styles";

export default function UserPage() {
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.users);
  const user = React.useMemo(() => getUser(users, +id!), [id, users])!;
  const { name, email, phone, website } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSending, call, status } = useHttp({
    method: "DELETE",
    endPoint: `users/${id}`,
  });
  const [openConfirm, setOpenConfirm] = React.useState<boolean>(false);

  const handleConfirm = React.useCallback(
    async (userId: number) => {
      await call();
      setOpenConfirm(false);
      dispatch(deleteUser({ id: userId }));
    },
    [call, dispatch],
  );

  if (!user)
    return (
      <Wrapper>
        <p>User not found</p>
      </Wrapper>
    );

  return (
    <Container>
      <Wrapper>
        <Flex direction="column" gap="16px" fullWidth>
          <Title>{name}</Title>
          <Flex align="center" gap="16px">
            <EmailIcon size={20} />
            <Subtitle>{email}</Subtitle>
          </Flex>
          <Flex align="center" gap="16px">
            <PhoneIcon size={20} />
            <Subtitle>{phone}</Subtitle>
          </Flex>
          <Flex align="center" gap="16px">
            <GlobeIcon size={20} />
            <Anchor href={`http://${website}`} target="_blank">
              {website}
            </Anchor>
          </Flex>
          <Flex gap="15px" fullWidth>
            <Button
              onClick={() => navigate(`edit-user/${id}`)}
              variant="contained"
              color="success"
            >
              edit
            </Button>
            <Button
              onClick={() => setOpenConfirm(true)}
              variant="contained"
              color="error"
            >
              delete
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="contained"
              color="secondary"
            >
              back to all users
            </Button>
          </Flex>
        </Flex>
      </Wrapper>
      <ConfirmModal
        title="Delete confirmation"
        message={`are you sure you want to delete user ${name}`}
        open={openConfirm}
        loading={isSending}
        onClose={() => setOpenConfirm(false)}
        handleConfirm={() => handleConfirm(user.id)}
      />
      {status === "success" && (
        <Snackbar
          message={`user ${name} is successfully deleted`}
          duration={2500}
          status="success"
        />
      )}
      {status === "error" && (
        <Snackbar
          message={`failed to delete user ${name}`}
          duration={2500}
          status="success"
        />
      )}
    </Container>
  );
}
