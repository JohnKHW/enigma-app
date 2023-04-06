import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Wallet } from "@/components/wallet";
import { CouponsList } from "@/components/coupons-list";

const theme = createTheme();
export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header>
        <></>
      </Header>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            fontSize: "14px",
          }}
        >
          <Container maxWidth="sm">
            <Wallet />
          </Container>
        </Box>
        <CouponsList />
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}
