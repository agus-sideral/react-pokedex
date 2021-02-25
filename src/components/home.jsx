import React from 'react';
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core';
import PokemonTable from './PokemonTable'
import { useTranslation } from 'react-i18next';

export function Home() {
  const { t, i18n } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Container maxWidth="xs">
        <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h6">
            {t('Welcome to Pokedex')}
          </Typography>
        </Toolbar>
        </AppBar>
        <Toolbar />
      </Container>
      <PokemonTable/>
    </Container>
  )
}