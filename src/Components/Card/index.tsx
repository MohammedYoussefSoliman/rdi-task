import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "components/Containers";
import ConfirmModal from "components/ConfirmModal";
import Snackbar from "components/Snackbar";
import useHttp from "app/hooks/useHTTP";
import { useDispatch } from "react-redux";
import { deleteUser } from "app/State/usersSlice";
import { EmailIcon, PhoneIcon, GlobeIcon } from "assets/svgs";
import { Wrapper, Title, Subtitle, Anchor, Button } from "./styles";

interface CardProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function Card({ id, name, email, phone, website }: CardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSending, call, status } = useHttp({
    method: "DELETE",
    endPoint: `usesddrs/${id}`,
  });
  const [openConfirm, setOpenConfirm] = React.useState<boolean>(false);

  const handleConfirm = React.useCallback(async () => {
    await call();
    setOpenConfirm(false);
    dispatch(deleteUser({ id }));
  }, [call, dispatch, id]);

  return (
    <>
      <Wrapper>
        <Flex direction="column" gap="16px" fullWidth>
          <Title>{name}</Title>
          <Flex align="center" gap="16px">
            <EmailIcon size={15} />
            <Subtitle>{email}</Subtitle>
          </Flex>
          <Flex align="center" gap="16px">
            <PhoneIcon size={15} />
            <Subtitle>{phone}</Subtitle>
          </Flex>
          <Flex align="center" gap="16px">
            <GlobeIcon size={15} />
            <Anchor href={`http://${website}`} target="_blank">
              {website}
            </Anchor>
          </Flex>
          <Flex gap="10px" fullWidth>
            <Button
              onClick={() => navigate(`view-user/${id}`)}
              variant="contained"
              color="secondary"
            >
              view
            </Button>
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
          </Flex>
        </Flex>
      </Wrapper>
      <ConfirmModal
        title="Delete confirmation"
        message={`are you sure you want to delete user ${name}`}
        open={openConfirm}
        loading={isSending}
        onClose={() => setOpenConfirm(false)}
        handleConfirm={handleConfirm}
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
      {/* {console.log(status)}
      {console.log(error)} */}
    </>
  );
}
