import React from 'react';
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core';

export function Home() {
  return (
    <Container maxWidth="xl">
      <Container maxWidth="xs">
      <AppBar color="secondary">
      <Toolbar>
        <Typography variant="h6">
          Welcome to Pokedex
        </Typography>
      </Toolbar>
      </AppBar>
      </Container>
    </Container>
  )
}