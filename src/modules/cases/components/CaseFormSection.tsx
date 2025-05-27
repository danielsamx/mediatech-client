import type { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { PersonalInfoForm } from "./PersonalInfoForm";

interface CaseFormSectionProps {
  title: string;
  jcontet: string;
}

export const CaseFormSection: FC<CaseFormSectionProps> = ({
  title,
  jcontet,
}) => {
  return (
    <Grid container sx={{ mb: 4, display: "flex", justifyContent: jcontet }}>
      <Grid size={10} sx={{ width: "95%" }}>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: "500",
            color: "#1e3a8a",
            fontSize: 15,
          }}
        >
          {title}
        </Typography>
        <PersonalInfoForm />
      </Grid>
    </Grid>
  );
};
