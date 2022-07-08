import { MantineProvider, Text } from "@mantine/core";
import { Dashboard } from "tabler-icons-react";
import DashboardShell from "./views/components/DashboardShell";
import { NavbarNested } from "./views/components/NavbarNested";

function App() {
  return (
    <MantineProvider
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Inter",
      }}
    >
      <DashboardShell />
    </MantineProvider>
  );
}

export default App;
