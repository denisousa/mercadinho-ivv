import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
} from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// Mock products data
const products: Product[] = [
  {
    id: 1,
    name: 'Arroz Integral',
    description: 'Arroz integral de alta qualidade',
    price: 50,
    image: '/images/arroz.jpg',
    category: 'Alimentos',
  },
  {
    id: 2,
    name: 'Feijão Carioca',
    description: 'Feijão carioca tipo 1',
    price: 40,
    image: './images/feijao.png',
    category: 'Alimentos',
  },
  {
    id: 3,
    name: 'Soja	',
    description: 'Soja 500ml',
    price: 30,
    image: './images/soja.png',
    category: 'Alimentos',
  },
  {
    id: 4,
    name: 'Detergente',
    description: 'Detergente líquido 500ml',
    price: 30,
    image: './images/detergente.png',
    category: 'Limpeza',
  },
  {
    id: 4,
    name: 'Escova de dente',
    description: 'Escova de dente 100ml',
    price: 30,
    image: './images/escova-de-dente.png',
    category: 'Higiene',
  },
  {
    id: 5,
    name: 'Leite',
    description: 'Leite 1L',
    price: 30,
    image: './images/leite.jpeg',
    category: 'Bebidas',
  },

  // Add more products as needed
];

const categories = ['Todos', 'Alimentos', 'Limpeza', 'Bebidas', 'Higiene'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Produtos
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{
                  height: 200,
                  objectFit: 'contain',
                  backgroundColor: '#f5f5f5',
                  padding: '10px'
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  {product.price} pontos
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products; 