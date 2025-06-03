import { Box, Typography, Avatar } from "@mui/material";

export default function SelectContent() {
  return (
    <Box
      sx={{
        width: 215,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Avatar
        src="/path-to-your-image.jpg"
        alt="Mediatech Logo"
        sx={{ width: 100, height: 100 }}
      />
      <Typography variant="h6" mt={1}>
        Mediatech
      </Typography>
    </Box>
  );
}
