import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Card = styled(Box)({
  background: "#7a81ff",
  borderRadius: "16px",
  padding: "24px",
  width: "100%",
});

const WalletName = styled(Typography)({
  color: "#fff",
  fontSize: "24px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
});

const WalletAddress = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const WalletAddressText = styled(Typography)({
  color: "#fff",
  fontSize: "24px",
  fontWeight: 600,
  letterSpacing: "2px",
});

const BalanceLabel = styled(Typography)({
  color: "#fff",
  fontSize: "18px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
});

const BalanceStack = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ValueLabel = styled(Typography)({
  color: "#fff",
  fontSize: "24px",
  fontWeight: 600,
  letterSpacing: "1px",
});

const CurrencyLabel = styled(Typography)({
  color: "#fff",
  fontSize: "18px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginLeft: "8px",
});

const Wallet = () => {
  const [copied, setCopied] = useState(false);
  const [walletAddress, setWalletAddress] = useState(
    "0xF2F30c3D2b09bd539A60b11097892c2B64E0c838"
  );
  const [showValues, setShowValues] = useState(true);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    if (copied) {
      timeoutId = setTimeout(() => setCopied(false), 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [copied]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
  };

  const handleShowValuesClick = () => {
    setShowValues(!showValues);
  };

  return (
    <Card>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <WalletName>Enigma</WalletName>
        <Button onClick={handleShowValuesClick} variant="contained">
          {showValues ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </Button>
      </Box>

      <WalletAddress>
        <WalletAddressText>
          {`${walletAddress.slice(0, 5)}...${walletAddress.slice(-4)}`}
        </WalletAddressText>
        <IconButton
          onClick={handleCopyClick}
          size="small"
          sx={{ color: "#fff" }}
        >
          <FileCopyOutlinedIcon />
        </IconButton>
        {copied && (
          <ValueLabel sx={{ marginLeft: "8px" }} color="success">
            Copied!
          </ValueLabel>
        )}
      </WalletAddress>

      {showValues && (
        <>
          <BalanceStack>
            <BalanceLabel>Balance</BalanceLabel>
            <CurrencyLabel>(SHOP)</CurrencyLabel>
          </BalanceStack>
          <BalanceStack>
            <ValueLabel>100</ValueLabel>
          </BalanceStack>
          <BalanceStack>
            <ValueLabel>$1000</ValueLabel>
          </BalanceStack>
        </>
      )}
      {!showValues && (
        <>
          <BalanceStack>
            <BalanceLabel>Balance</BalanceLabel>
            <CurrencyLabel>(SHOP)</CurrencyLabel>
          </BalanceStack>
          <BalanceStack>
            <ValueLabel>xxx</ValueLabel>
          </BalanceStack>
          <BalanceStack>
            <ValueLabel>$xxxx</ValueLabel>
          </BalanceStack>
        </>
      )}
    </Card>
  );
};
export { Wallet };
