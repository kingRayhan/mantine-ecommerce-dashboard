import { Avatar, Menu } from "@mantine/core";
import { IconMessageCircle, IconSettings } from "@tabler/icons";
import React from "react";

const HeaderUserMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar
          src="https://avatars.githubusercontent.com/u/7611746?v=4"
          alt="it's me"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderUserMenu;
