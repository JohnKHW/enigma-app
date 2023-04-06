import React, { useState } from "react";
import { Box, Container, Grid, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

enum CouponCategoryEnum {
  All = "All",
  Retail = "Retail",
  Restaurant = "Restaurant",
  Entertainment = "Entertainment",
  Shopping = "Shopping",
}

interface CouponProps {
  id: number;
  name: string;
  category: CouponCategoryEnum;
  price: number;
  image: string;
}

const coupons: CouponProps[] = [
  {
    id: 1,
    name: "20% off your entire purchase",
    category: CouponCategoryEnum.Retail,
    price: 200, // Price in cents
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "$10 off your next meal",
    category: CouponCategoryEnum.Restaurant,
    price: 500, // Price in cents
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Free movie rental",
    category: CouponCategoryEnum.Entertainment,
    price: 0, // Free coupon
    image: "https://via.placeholder.com/150",
  },
];

const CategoryButton = styled(Button)({
  borderRadius: "16px",
  padding: "8px 16px",
  margin: "0 8px 8px 0",
  fontSize: "14px",
});

const CouponCard = styled(Paper)({
  padding: "24px",
  margin: "16px 0",
});
const CouponImage = styled("img")({
  maxWidth: "100%",
});

const CouponName = styled(Typography)({
  color: "#333",
  fontSize: "18px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
});

const CouponCategory = styled(Typography)({
  color: "#999",
  fontSize: "14px",
  fontWeight: 400,
});

const CouponPrice = styled(Typography)({
  color: "#333",
  fontSize: "16px",
  fontWeight: 600,
});
const Coupon = ({ id, name, category, price, image }: CouponProps) => (
  <CouponCard>
    <CouponImage src={image} alt={name} />
    <CouponName>{name}</CouponName>
    <CouponCategory>{category}</CouponCategory>
    <CouponPrice>{price} SHOP</CouponPrice>
  </CouponCard>
);

const CouponsList = () => {
  const [category, setCategory] = useState(CouponCategoryEnum.All);
  const [showAll, setShowAll] = useState(true);

  const categories = Object.values(CouponCategoryEnum);

  const handleCategoryClick = (category: CouponCategoryEnum) => {
    setCategory(category);
    if (category !== CouponCategoryEnum.All) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

  return (
    <Container sx={{ my: 8, mt: 2 }}>
      <Box>
        {categories.map((c) => (
          <CategoryButton
            key={c}
            variant="contained"
            color={category === c ? "primary" : "secondary"}
            onClick={() => handleCategoryClick(c)}
          >
            {c}
          </CategoryButton>
        ))}
      </Box>
      <Grid container spacing={1}>
        {coupons
          .filter((c) => category === "All" || c.category === category)
          .map((c) => (
            <Grid item key={c.id} xs={12} sm={6} md={4}>
              <Coupon {...c} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export { CouponsList };
