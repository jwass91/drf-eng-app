import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          DRF-ENG-APP
        </Typography>
        <Button
          onClick={() => {
            const url = "https://github.com/jwass91/drf-eng-app";
            window.open(url, "_blank");
          }}
          style={{ color: "white", marginRight: "theme.spacing(2)" }}
        >
          View Source
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
