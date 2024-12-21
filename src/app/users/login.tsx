import { BaseLayout } from "@/components/layouts/base-layout";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Alert } from "@/components/ui/alert";
import {
  UserLoginInput,
  UserLoginInputSchema,
  useUserLogin,
} from "@/modules/users/api/login";
import {
  Box,
  Center,
  Container,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useUserLogin();

  const form = useForm<UserLoginInput>({
    resolver: zodResolver(UserLoginInputSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitForm = (input: UserLoginInput) => {
    mutate(
      { data: input },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  return (
    <BaseLayout title="Login">
      <Stack
        direction="row"
        justifyContent="center"
        lg={{ justifyContent: "start" }}
      >
        <Box
          background="blue.400"
          width="40%"
          height="100vh"
          display="none"
          lg={{ display: "block" }}
        />
        <Center width="100%" lg={{ width: "60%" }} height="100vh">
          <Container maxW="md">
            <Stack spaceY={6}>
              <Stack spaceY={2}>
                <Heading size="3xl" fontWeight="bold" textAlign="center">
                  Sign in to Jobs
                </Heading>
                <Text textAlign="center" color="fg.muted">
                  Start using Jobs in your company
                </Text>
              </Stack>
              <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                <Stack spaceY={4}>
                  {isError && (
                    <Alert
                      status="error"
                      title={error.response?.data.detail}
                    ></Alert>
                  )}
                  <Stack spaceY={4}>
                    <Controller
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <Field
                          label="Email"
                          invalid={fieldState.invalid}
                          errorText={fieldState.error?.message}
                        >
                          <Input colorPalette="blue" type="email" {...field} />
                        </Field>
                      )}
                    />
                    <Controller
                      control={form.control}
                      name="password"
                      render={({ field, fieldState }) => (
                        <Field
                          label="Password"
                          invalid={fieldState.invalid}
                          errorText={fieldState.error?.message}
                        >
                          <PasswordInput colorPalette="blue" {...field} />
                        </Field>
                      )}
                    />
                  </Stack>
                  <Stack direction="row">
                    <Link
                      colorPalette="blue"
                      fontSize="sm"
                      fontWeight="medium"
                      href="/"
                    >
                      Forgot password?
                    </Link>
                  </Stack>
                  <Button
                    type="submit"
                    colorPalette="blue"
                    loading={isPending}
                    loadingText="Logging in..."
                  >
                    Log in
                  </Button>
                </Stack>
              </form>
              <Text fontSize="sm" textAlign="center">
                Don't have an account?{" "}
                <Link
                  href="/users/register"
                  fontWeight="medium"
                  colorPalette="blue"
                >
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Container>
        </Center>
      </Stack>
    </BaseLayout>
  );
}
