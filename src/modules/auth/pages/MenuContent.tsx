import { useNavigate, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

const mainListItems = [
  //{ text: "Home", icon: <HomeRoundedIcon />, path: "/" },
  { text: "Turnos", icon: <AnalyticsRoundedIcon />, path: "/turnos" },
  { text: "Casos", icon: <AssignmentRoundedIcon />, path: "/casos" },
];

export default function MenuContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isSelected = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={isSelected(item.path)}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 1,
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                },
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
