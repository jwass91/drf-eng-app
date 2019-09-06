import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          DRF-ENG-APP
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
