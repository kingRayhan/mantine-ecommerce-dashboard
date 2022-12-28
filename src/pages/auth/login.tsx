import http from "@/app/api/http";
import authRepo, { LoginPayload } from "@/app/api/repositories/auth.repo";
import { Anchor, Button, Input, Paper, Space, Title } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("Required").email("Invalid email"),
  password: yup.string().min(6).max(30),
});

const LoginPage = () => {
  const router = useRouter();

  const { isLoading, mutate, data } = useMutation(
    (payload: LoginPayload) => {
      return http.post("/auth/login", payload);
    },
    {
      onSuccess: (res) => {
        localStorage.setItem("token", res.data.data.access_token);
        router.push("/");
        showNotification({
          icon: <IconCheck />,
          color: "green",
          title: "Login success",
          message: "Welcome to the dashboard",
        });
      },
      onError: (err) => {
        showNotification({
          icon: <IconX />,
          color: "red",
          title: "Invalid credentials",
          message: "Please check your email and password",
        });
      },
    }
  );

  const handleOnsubmit = async (values: any) => {
    mutate(values);
  };

  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: handleOnsubmit,
  });

  return (
    <div className="h-screen bg-slate-100">
      <div className="max-w-md py-10 mx-auto">
        <Paper shadow="md" p="md">
          <form action="#" onSubmit={handleSubmit}>
            <Title order={4} color={"dark.3"}>
              Access to your account
            </Title>

            <Space h={"md"} />

            <Input.Wrapper withAsterisk label="Email" error={errors.email}>
              <Input
                placeholder="Your email"
                name="email"
                disabled={isLoading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Input.Wrapper>

            <Space h={"sm"} />

            <Input.Wrapper
              withAsterisk
              label="Password"
              error={errors.password}
            >
              <Input
                placeholder="Password"
                type={"password"}
                name="password"
                disabled={isLoading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Input.Wrapper>

            <Space h={"sm"} />

            <Button loading={isLoading} type="submit">
              Login
            </Button>
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
