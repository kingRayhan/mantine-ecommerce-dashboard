import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  email: yup.string().required("Required").email("Invalid email"),
  password: yup.string().min(6).max(30),
});

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "rayhan",
      password: "pass",
    },
  });

  const handleSubmitForm = (values: any) => {
    console.log({ values });
    // TODO: call api
  };

  return (
    <div className="h-screen bg-slate-100">
      <div className="max-w-md py-10 mx-auto">
        <Paper shadow="md" p="md">
          <form action="#" onSubmit={handleSubmit(handleSubmitForm)}>
            <Title order={4} color={"dark.3"}>
              Access to your account
            </Title>

            <Space h={"md"} />

            <Input.Wrapper
              withAsterisk
              label="Email"
              error={errors.email?.message}
            >
              <Input placeholder="Your email" {...register("email")} />
            </Input.Wrapper>

            <Space h={"sm"} />

            <Input.Wrapper
              withAsterisk
              label="Password"
              error={errors.password?.message}
            >
              <Input
                placeholder="Password"
                type={"password"}
                {...register("password")}
              />
            </Input.Wrapper>

            <Space h={"sm"} />

            <Button type="submit">Login</Button>
          </form>

          <Space h={"sm"} />

          <Anchor
            size={"sm"}
            color="gray.8"
            component={Link}
            href="/auth/register"
          >
            Don&apos;t have an account? Register now
          </Anchor>
        </Paper>
      </div>
    </div>
  );
};

export default LoginPage;
