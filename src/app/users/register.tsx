import { BaseLayout } from "@/components/layouts/base-layout";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
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

export function Register() {
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
              <form>
                <Stack spaceY={4}>
                  <Stack spaceY={4}>
                    <Field label="Email">
                      <Input colorPalette="blue" type="email" />
                    </Field>
                    <Field label="Password">
                      <PasswordInput colorPalette="blue" />
                    </Field>
                    <Field label="Confirm Password">
                      <PasswordInput colorPalette="blue" />
                    </Field>
                  </Stack>
                  <Button colorPalette="blue">Create an account</Button>
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
