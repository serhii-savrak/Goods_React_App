import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function DescriptionAlerts() {
  return (
    <div style={{ width: "100%", position: "fixed", left: "40%" }}>
      <Stack sx={{ width: "25%" }} spacing={2}>
        <Alert severity="success">
          <AlertTitle>Note</AlertTitle>
          This phone was already added to a cart —{" "}
          <strong>check it out!</strong>
        </Alert>
      </Stack>
    </div>
  );
}
