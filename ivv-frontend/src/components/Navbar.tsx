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
     <AppBar position="static" sx={{ backgroundColor: '#333333' }}> 
      <Toolbar>
        
        <Box
          component="img" // Isso garante que o Box renderize uma tag <img> HTML
          src="/images/inst.jpg" // CAMINHO DA SUA IMAGEM. Certifique-se que o nome do arquivo 'inst.jpg' está correto!
          alt="Logo Mercadinho IVV" // Texto alternativo para acessibilidade
          sx={{
            height: 80, // ALTURA DA IMAGEM: Ajuste este valor (ex: 30, 50, etc.) para o tamanho desejado
            // Se você quer que a imagem seja um círculo perfeito e a altura é 90, defina a largura também:
            // width: 90, 
            marginRight: 2, // ESPAÇAMENTO: Adiciona um espaço de 16px à direita da imagem para não colar no texto
            // ---------------------------------------------------------------------------------------
            // CÓDIGO NOVO: PARA ARREDONDAR A IMAGEM
            borderRadius: '60%', // Isso fará a imagem parecer um círculo se a altura e largura forem iguais
                                // ou um oval se forem diferentes.
                                // Se quiser apenas bordas arredondadas, use um valor em px, ex: '15px'
            // ---------------------------------------------------------------------------------------
          }}
        />
    

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MERCADINHO IVV
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