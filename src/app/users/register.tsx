import { BaseLayout } from "@/components/layouts/base-layout";
import { Alert } from "@/components/ui/alert";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import {
  UserRegisterInput,
  UserRegisterInputSchema,
  useUserRegister,
} from "@/modules/users/api/register";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export function Register() {
  const register = useUserRegister();

  const form = useForm<UserRegisterInput>({
    resolver: zodResolver(UserRegisterInputSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmitForm = (input: UserRegisterInput) => {
    register.mutate({ data: input });
  };

  return (
    <BaseLayout title="Registration">
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
                  Sign up to Jobs
                </Heading>
                <Text textAlign="center" color="fg.muted">
                  Start using Jobs in your company
                </Text>
              </Stack>
              <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                <Stack spaceY={4}>
                  {register.isError && (
                    <Alert
                      status="error"
                      title={register.error.response?.data.detail}
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
                    <Controller
                      control={form.control}
                      name="confirmPassword"
                      render={({ field, fieldState }) => (
                        <Field
                          label="Confirm Password"
                          invalid={fieldState.invalid}
                          errorText={fieldState.error?.message}
                        >
                          <PasswordInput colorPalette="blue" {...field} />
                        </Field>
                      )}
                    />
                  </Stack>
                  <Button colorPalette="blue" type="submit">
                    Create an account
                  </Button>
                </Stack>
              </form>
              <Text fontSize="sm" textAlign="center">
                Already have an account?{" "}
                <Link
                  href="/users/login"
                  fontWeight="medium"
                  colorPalette="blue"
                >
                  Sign In
                </Link>
              </Text>
            </Stack>
          </Container>
        </Center>
      </Stack>
    </BaseLayout>
  );
}
