import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
