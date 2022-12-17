import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className=" bg-slate-100 h-screen">
      <div className="max-w-md mx-auto py-10">
        <Paper shadow="md" p="md">
          <form action="#">
            <Title order={4} color={"dark.3"}>
              Grab a new account
            </Title>

            <Input.Wrapper withAsterisk label="Name">
              <Input placeholder="Your name" />
            </Input.Wrapper>

            <Space h={"md"} />

            <Input.Wrapper withAsterisk label="Email">
              <Input placeholder="Your email" />
            </Input.Wrapper>

            <Space h={"sm"} />

            <Input.Wrapper withAsterisk label="Password">
              <Input placeholder="Password" type={"password"} />
            </Input.Wrapper>

            <Space h={"sm"} />

            <Input.Wrapper withAsterisk label="Confirm Password">
              <Input placeholder="Confirm" type={"password"} />
            </Input.Wrapper>

            <Space h={"sm"} />

            <Button>Register</Button>
          </form>

          <Space h={"sm"} />

          <Anchor
            size={"sm"}
            color="gray.8"
            component={Link}
            href="/auth/login"
          >
            Already have an account? Login now
          </Anchor>
        </Paper>
      </div>
    </div>
  );
};

export default RegisterPage;
