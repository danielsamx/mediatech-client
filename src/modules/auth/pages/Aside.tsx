import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MenuContent from "./MenuContent";
import SelectContent from "./SelectContent";
import AppTheme from "../components/AppTheme";
import { Stack } from "@mui/material";
import OptionsMenu from "./OptionsMenu";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  return (
    <AppTheme>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          [`& .${drawerClasses.paper}`]: {
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            mt: "calc(var(--template-frame-height, 0px) + 4px)",
            p: 1.5,
          }}
        >
          <SelectContent />
        </Box>
        <Divider />
        <Box
          sx={{
            overflow: "auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MenuContent />
          <Stack
            direction="row"
            sx={{
              p: 2,
              gap: 1,
              alignItems: "center",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <OptionsMenu />
          </Stack>
        </Box>
      </Drawer>
    </AppTheme>
  );
}
