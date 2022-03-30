import React from "react";
import { Flex } from "components/Containers";
import ConfirmModal from "components/ConfirmModal";
import useHttp from "app/hooks/useHTTP";
import { EmailIcon, PhoneIcon, GlobeIcon } from "assets/svgs";
import { Wrapper, Title, Subtitle, Anchor, Button } from "./styles";

interface CardProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function Card({ id, name, email, phone, website }: CardProps) {
  const { isSending, call } = useHttp({
    method: "DELETE",
    endPoint: `users/${id}`,
  });
  const [openConfirm, setOpenConfirm] = React.useState<boolean>(false);

  return (
    <>
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
            <Button variant="contained" color="success">
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
        handleConfirm={() => call()}
      />
    </>
  );
}
