import React, { Fragment } from 'react';
import i18n from '../i18n';
import { Select, MenuItem } from '@material-ui/core';

function LanguageToggler({ t }) {
  const [language, setLanguage] = React.useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang.target.value)
    i18n.changeLanguage(lang.target.value);
  }

  return (
    <Fragment>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          onChange={changeLanguage}
        >
          <MenuItem value={'es'}>Español</MenuItem>
          <MenuItem value={'en'}>English</MenuItem>
        </Select>
    </Fragment>
  )
}

export default LanguageToggler;