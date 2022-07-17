import React, { useState } from "react";
import { AppShell, Text } from "@mantine/core";
import DashboardHeader from "./Header";
import { NavbarNested } from "./NavbarNested";

export default function DashboardShell() {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<NavbarNested opened={opened} setOpened={setOpened} />}
      header={<DashboardHeader opened={opened} setOpened={setOpened} />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
