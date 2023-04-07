import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Wallet } from "@/components/wallet";
import { CouponsList } from "@/components/coupons-list";
import ShopList from "@/components/shop-list";

const theme = createTheme();
const MobilePage = () => {
  const [pageIdx, setPageIdx] = React.useState(0);
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
        { pageIdx === 0 && <CouponsList /> }
        { pageIdx === 2 && <ShopList /> }
      </main>
      {/* Footer */}
      <Footer setPageIdx={setPageIdx} pageIdx={pageIdx} />
      {/* End footer */}
    </ThemeProvider>
  );
};
export default MobilePage;
