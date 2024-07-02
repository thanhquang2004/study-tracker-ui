import { Button, Paper, Typography } from "@mui/material";
import AppForm from "./form/AppForm";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <AppForm>
        <Paper sx={{ maxWidth: "300px", px: 5, py: 4 }}>
          <Typography color="inherit" align="center" variant="h4">
            Generate your Roadmap
          </Typography>
          <Link to="/quiz1">
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              sx={{ minWidth: 200 }}
            >
              Start
            </Button>
          </Link>
        </Paper>
      </AppForm>
    </>
  );
};

export default Home;
