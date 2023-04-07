import { Header } from "@/components/business/header";
import { RegistrationForm } from "@/components/business/registration-form";
import { Label } from "@mui/icons-material";
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const RegisterPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header>
          <></>
        </Header>
        <main style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(4) }}>
          <RegistrationForm />
        </main>
      </ThemeProvider>
    </>
  );
};
export default RegisterPage;
