import React from 'react';
import { TextField, Checkbox, FormControlLabel, Button, Typography, Link, Box } from '@mui/material';
import './RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <Box className="registration-container">
      <Typography variant="h4" className="title">
        Cadastro
      </Typography>
      <form className="form">
        <TextField label="Nome" variant="outlined" fullWidth className="form-field" />
        <TextField label="Sobrenome" variant="outlined" fullWidth className="form-field" />
        <TextField label="Email" variant="outlined" fullWidth type="email" className="form-field" />
        <TextField label="Senha" variant="outlined" fullWidth type="password" className="form-field" />
        <FormControlLabel
          control={<Checkbox />}
          label="Quero receber informações promocionais"
          className="form-checkbox"
        />
        <Button variant="contained" color="primary" className="form-button">
          Cadastrar
        </Button>
        <Typography variant="body2" className="login-link">
          Já tem uma conta? <Link href="/login">Faça login</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default RegistrationForm;
