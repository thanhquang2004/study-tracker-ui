import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/Routes";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/header/Header";
import AuthProvider from "./components/auth/AuthProvider";

const theme = createTheme();
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <AuthProvider>
            <>
              <Header />
              <Container maxWidth="xl" sx={{ width: "100%" }}>
                <Router />
              </Container>
            </>
          </AuthProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const Router = () => {
  return <RouterProvider router={router} />;
};

export default App;
