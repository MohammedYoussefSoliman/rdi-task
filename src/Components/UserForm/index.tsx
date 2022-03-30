import React from "react";
import { Button } from "@mui/material";
// import { useDispatch } from "react-redux";
import Snackbar from "components/Snackbar";
// import { updateUser, addUser } from "app/State/usersSlice";
import { useNavigate } from "react-router-dom";
import useHttp from "app/hooks/useHTTP";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "helpers/types";
import { Flex } from "components/Containers";
import { TextInput, EmailInput } from "components/Inputs";
import { formDataHandler } from "app/functions";
import { Wrapper, Form, Title } from "./styles";

type UserFormDataType = Omit<User, "id">;
type UserFormProps = {
  user?: User;
};

export default function UserForm({ user }: UserFormProps) {
  const navigate = useNavigate();
  const methods = useForm<UserFormDataType>({
    defaultValues: { ...user },
  });
  const { control, handleSubmit } = methods;

  //   const dispatch = useDispatch();

  //   const addNewUser = React.useCallback(
  //     (data: any) => {
  //       dispatch(
  //         addUser({
  //           id: data.id,
  //           name: data.name,
  //           phone: data.phone,
  //           email: data.email,
  //           website: data.website,
  //         }),
  //       );
  //     },
  //     [dispatch],
  //   );
  //   const updateExistedUser = React.useCallback(
  //     (data: any) => {
  //       dispatch(
  //         updateUser({
  //           id: data.id,
  //           name: data.name,
  //           phone: data.phone,
  //           email: data.email,
  //           website: data.website,
  //         }),
  //       );
  //     },
  //     [dispatch],
  //   );

  const {
    call,
    data: responseData,
    isSending,
    status,
  } = useHttp({
    method: user?.id ? "PUT" : "POST",
    endPoint: user?.id ? `users/${user.id}` : "users",
    // callBack: user?.id ? updateExistedUser : addNewUser,
  });

  const onSubmit: SubmitHandler<UserFormDataType> = async (
    data: UserFormDataType,
  ) => {
    const formData = formDataHandler(data);
    call(formData);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <Wrapper>
      <Flex
        direction="column"
        gap="15px"
        align="center"
        justify="center"
        height="100%"
        fullWidth
      >
        <Title>{user ? `Edit user ${user.name}` : "Add user"} </Title>
        <Form>
          <Flex gap="15px" direction="column" fullWidth>
            <TextInput
              placeholder="User name"
              variant="outlined"
              name="name"
              control={control}
              validationRules={{
                required: "this field is required",
              }}
            />
            <EmailInput
              placeholder="User email"
              variant="outlined"
              name="email"
              control={control}
              validationRules={{
                required: "this field is required",
              }}
            />
            <TextInput
              placeholder="User phone"
              variant="outlined"
              name="phone"
              control={control}
              validationRules={{
                required: "this field is required",
              }}
            />
            <TextInput
              placeholder="User website"
              variant="outlined"
              name="website"
              control={control}
              validationRules={{
                required: "this field is required",
              }}
            />
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              disabled={isSending}
            >
              {isSending ? "sending..." : "Submit"}
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={() => navigate("/")}
              color="error"
            >
              Cancel
            </Button>
          </Flex>
        </Form>
      </Flex>
      {status === "success" && (
        <Snackbar
          message={
            user
              ? `user ${user.name} data updated`
              : `user added Successfully with id ${responseData.id}`
          }
          duration={2500}
          status="success"
        />
      )}
      {status === "error" && (
        <Snackbar
          message="an unknown error occurred"
          duration={2500}
          status="success"
        />
      )}
    </Wrapper>
  );
}
