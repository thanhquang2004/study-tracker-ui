import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid, Paper } from "@mui/material";

export default function AppForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <Grid container sx={{ width: "100vh" }}>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            display: "flex",
            backgroundImage: `url(${"https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
          }}
        >
          <Container>
            <Box
              sx={{ display: "flex", flexDirection: "column",alignItems: "center", justifyContent: "center", height: "100%"}}
            >
              {children}
            </Box>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
}
