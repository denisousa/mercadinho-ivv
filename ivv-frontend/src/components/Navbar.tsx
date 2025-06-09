import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mercadinho do IVV
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {isLoggedIn ? (
            <>
              <Typography variant="body1" sx={{ color: 'white' }}>
                Pontos: {user?.points}
              </Typography>
              
              <Button
                color="inherit"
                component={RouterLink}
                to="/"
              >
                Início
              </Button>
              
              <Button
                color="inherit"
                component={RouterLink}
                to="/products"
              >
                Produtos
              </Button>
              
              <Button
                color="inherit"
                component={RouterLink}
                to="/cart"
                startIcon={<ShoppingCartIcon />}
              >
                Carrinho
              </Button>
              
              <Button
                color="inherit"
                component={RouterLink}
                to="/profile"
                startIcon={<AccountCircleIcon />}
              >
                Perfil
              </Button>

              <Button
                color="inherit"
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
              >
                Sair
              </Button>
            </>
          ) : (
            <Button
              color="inherit"
              component={RouterLink}
              to="/register"
            >
              Cadastre-se
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 