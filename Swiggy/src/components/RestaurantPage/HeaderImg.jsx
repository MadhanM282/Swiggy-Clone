import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function HeaderImg() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
