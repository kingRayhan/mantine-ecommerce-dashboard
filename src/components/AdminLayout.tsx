import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { PropsWithChildren, useState } from "react";
import AdminMenu from "./admin-components/AdminMenu";
import HeaderUserMenu from "./admin-components/HeaderUserMenu";

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<AdminMenu opened={opened} />}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div className="flex items-center h-full justify-between">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Title order={3}>Dashboard</Title>
            <HeaderUserMenu />
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default AdminLayout;
