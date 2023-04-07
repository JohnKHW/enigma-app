import React, { FormEventHandler, useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import { styled } from "@mui/material/styles";

const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FieldBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "16px",
  minWidth: 200,
});

const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
});

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    couponName: "",
    startDate: null,
    endDate: null,
    requiredPoints: 100,
    imageUrl: "",
    category: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
      | SelectChangeEvent
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (name: string, date: Date | null) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: date,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <FormBox component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Create Event
      </Typography>
      <FieldBox>
        <TextField
          label="Event Name"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          required
        />
      </FieldBox>
      <FieldBox>
        <TextField
          label="Coupon Name"
          name="couponName"
          value={formData.couponName}
          onChange={handleChange}
          required
        />
      </FieldBox>
      <FieldBox>
        <DatePicker
          label="Start Date"
          name="startDate"
          value={formData.startDate}
          onChange={(date: Date) => handleDateChange("startDate", date)}
          required
          inputFormat="dd/MM/yyyy"
          renderInput={(params: any) => <TextField {...params} />}
        />
      </FieldBox>
      <FieldBox>
        <DatePicker
          label="End Date"
          name="endDate"
          value={formData.endDate}
          onChange={(date: Date) => handleDateChange("endDate", date)}
          required
          inputFormat="dd/MM/yyyy"
          renderInput={(params: any) => <TextField {...params} />}
        />
      </FieldBox>
      <FieldBox>
        <TextField
          label="Required Points"
          name="requiredPoints"
          type="number"
          value={formData.requiredPoints}
          onChange={handleChange}
          required
        />
      </FieldBox>
      <FieldBox>
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="clothing">Clothing</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="beauty">Beauty</MenuItem>
            <MenuItem value="home">Home</MenuItem>
          </Select>
        </FormControl>
      </FieldBox>
      <FieldBox>
        <TextField
          label="Image URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
      </FieldBox>
      <ButtonBox>
        <Button variant="contained" type="submit">
          Create Event
        </Button>
      </ButtonBox>
    </FormBox>
  );
};
export { CreateEventForm };
