import React from "react";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Her kan du sette inn et ikon for eksempel, https://mui.com/material-ui/material-icons/*/}
            <Typography variant="h6" noWrap>
              Nheek Crypto
            </Typography>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
