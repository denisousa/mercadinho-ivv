import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

// Mock user data
const userData = {
  name: 'João Silva',
  email: 'joao.silva@email.com',
  points: 1000,
  joinDate: '01/01/2023',
};

// Mock transaction history
const transactions = [
  {
    id: 1,
    date: '15/03/2023',
    description: 'Compra de Arroz Integral',
    points: -50,
  },
  {
    id: 2,
    date: '10/03/2023',
    description: 'Bônus de Fidelidade',
    points: 100,
  },
  {
    id: 3,
    date: '05/03/2023',
    description: 'Compra de Feijão',
    points: -40,
  },
];

const Profile = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Meu Perfil
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Informações Pessoais
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <strong>Nome:</strong> {userData.name}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {userData.email}
              </Typography>
              <Typography variant="body1">
                <strong>Data de Cadastro:</strong> {userData.joinDate}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Saldo de Pontos
            </Typography>
            <Typography variant="h3" color="primary" sx={{ mt: 2 }}>
              {userData.points} pontos
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Histórico de Transações
            </Typography>
            <List>
              {transactions.map((transaction) => (
                <React.Fragment key={transaction.id}>
                  <ListItem>
                    <ListItemText
                      primary={transaction.description}
                      secondary={transaction.date}
                    />
                    <Typography
                      variant="body1"
                      color={transaction.points > 0 ? 'success.main' : 'error.main'}
                    >
                      {transaction.points > 0 ? '+' : ''}
                      {transaction.points} pontos
                    </Typography>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 