import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Aside() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("casos");

  const getButtonStyles = (item: string) => ({
    backgroundColor:
      selected === item ? "rgba(255, 255, 255, 0.2)" : "transparent",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  });

  return (
    <Box
      sx={{
        width: 260,
        flexShrink: 0,
        bgcolor: "#1e3a8a",
        color: "white",
        borderRight: "1px solid #2c5282",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        px: 2,
        pt: 3,
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <Stack alignItems="center" sx={{ py: 3 }}>
          <Avatar sx={{ width: 64, height: 64 }}>JD</Avatar>
        </Stack>

        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setSelected("casos");
                navigate("/casos");
              }}
              sx={getButtonStyles("casos")}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Casos" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setSelected("turnos");
                navigate("/turnos");
              }}
              sx={getButtonStyles("turnos")}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText primary="Turnos" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setSelected("config")}
              sx={getButtonStyles("config")}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Configuración" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setSelected("logout");
                navigate("/");
              }}
              sx={getButtonStyles("logout")}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Salir" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
