import React, { FormEventHandler, useState } from "react";
import {
  Button,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const FormBox = styled(Box)({
  display: "flex",
  paddingTop: "16px",
  flexDirection: "column",
  alignItems: "center",
});

const FieldBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px",
});

const FormRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
});

const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
});

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    principal: "",
    email: "",
    phone: "",
    walletAddress: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "terms" ? checked : value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <FormBox component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Business Registration Form
      </Typography>
      <FormRow>
        <FieldBox>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FieldBox>
        <FieldBox>
          <TextField
            label="ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </FieldBox>
      </FormRow>
      <FormRow>
        <FieldBox>
          <TextField
            label="Principal"
            name="principal"
            value={formData.principal}
            onChange={handleChange}
            required
          />
        </FieldBox>
        <FieldBox>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FieldBox>
      </FormRow>
      <FormRow>
        <FieldBox>
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FieldBox>
        <FieldBox>
          <TextField
            label="Wallet Address"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            required
          />
        </FieldBox>
      </FormRow>
      <FormRow>
        <FieldBox>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FieldBox>
        <FieldBox>
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FieldBox>
      </FormRow>
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.terms}
            onChange={handleChange}
            name="terms"
            color="primary"
          />
        }
        label="I accept the terms and conditions"
      />
      <ButtonBox>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </ButtonBox>
    </FormBox>
  );
};

export { RegistrationForm };
