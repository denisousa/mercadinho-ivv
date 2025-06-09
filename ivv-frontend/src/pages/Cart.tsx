import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Box,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: 'Arroz Integral',
    price: 50,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Feijão Carioca',
    price: 40,
    quantity: 1,
  },
];

const Cart = () => {
  const totalPoints = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Carrinho de Compras
      </Typography>

      <List>
        {cartItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemText
                primary={item.name}
                secondary={`${item.price} pontos`}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                <IconButton size="small">
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                <IconButton size="small">
                  <AddIcon />
                </IconButton>
              </Box>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Typography variant="h6" gutterBottom>
          Total: {totalPoints} pontos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Finalizar Compra
        </Button>
      </Box>
    </Container>
  );
};

export default Cart; 