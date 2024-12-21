import { BaseLayout } from "@/components/layouts/base-layout";
import { PasswordInput } from "@/components/ui/password-input";
import { Alert } from "@/components/ui/alert";
import { Field } from "@/components/ui/field";
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

  const login = useUserLogin();

  const form = useForm<UserLoginInput>({
    resolver: zodResolver(UserLoginInputSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitForm = (input: UserLoginInput) => {
    login.mutate(
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
                  {login.isError && (
                    <Alert
                      status="error"
                      title={login.error.response?.data.detail}
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
                    loading={login.isPending}
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

{
  /* <Field.Root>
  <Box pos="relative" w="full">
    <Input
      className="peer"
      placeholder=""
      variant="flushed"
      colorPalette="blue"
    />
    <Field.Label css={floatingStyles}>
      Email
    </Field.Label>
  </Box>
</Field.Root>

const floatingStyles = defineStyle({
  position: "absolute",
  background: "bg",
  paddingX: "0.5",
  transition: "all 0.2s ease-in-out",
  top: "2.5", // Initial position for the label
  left: "2", // Adjusted to align at the start
  fontSize: "md", // Default font size
  pointerEvents: "none",
  fontWeight: "normal",

  // Style when the placeholder is shown (field is not focused or filled)
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5", // Keep it aligned with the input field
    left: "0", // Slightly inset to match the input alignment
    fontSize: "md", // Default size for unfilled state
  },

  // Style when the field is focused or has content
  _peerFocusVisible: {
    color: "fg",
    top: "-3", // Move the label to the top
    left: "0", // Align with the beginning
    fontSize: "sm", // Shrink the font size
  },
}); */
}
