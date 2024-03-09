import { Typography, Box, Button } from "@mui/material";
import { ShopLayout } from "../components/layouts";

export default function Home() {
  return (
    <ShopLayout title="Ecommerce Sena - Home" pageDescription="Encuentra los mejores articulos para tu setup">
      <Typography variant="h1" component="h2">
         Tienda
      </Typography>
      <Typography variant="h1" component="h2" sx={{mb:1}}>
          Articulos
      </Typography>
      <Box>
        <Button>Botón</Button>
      </Box>
    </ShopLayout>
  );
}
