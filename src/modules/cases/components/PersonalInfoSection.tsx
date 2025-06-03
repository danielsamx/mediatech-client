import type { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { PersonalInfo } from "./PersonalInfo";

interface CaseFormSectionProps {
  title: string;
  jcontet: string;
}

export const PersonalInfoSection: FC<CaseFormSectionProps> = ({
  title,
  jcontet,
}) => {
  return (
    <Grid container sx={{ mb: 4, display: "flex", justifyContent: jcontet }}>
      <Grid size={10} sx={{ width: "95%" }}>
        <Typography sx={{ mb: 2.5, display: "block", fontWeight: 700 }}>
          {title}
        </Typography>
        <PersonalInfo />
      </Grid>
    </Grid>
  );
};
