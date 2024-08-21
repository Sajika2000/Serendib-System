import { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const pages = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
  { name: "SignIn", path: "/signin" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMenuOpen(false);
  };

  return (
    <AppBar
      position="static"
      className="bg-gradient-to-r from-backgroundColor to-brightColor z-100"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: "0.5rem",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            NewsApi
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label={
                menuOpen ? "close navigation menu" : "open navigation menu"
              }
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: "black",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to={page.path}
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        color: isActive ? "black" : "black",
                        "&:hover": {
                          color: "black",
                        },
                      })}
                    >
                      {page.name}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "1.25rem", // Increase font size here
            }}
          >
            NewsApi
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  textTransform: "none",
                  fontSize: "1.1rem", 
                  "&:hover": {
                    color: "blue", 
                  },
                }}
                component={NavLink}
                to={page.path}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#ffffff",
                  textDecoration: "none",
                })}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              color="inherit"
              href="https://www.facebook.com"
              target="_blank"
              sx={{
                "&:hover": { color: "black" },
                color: "#ffffff",
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.twitter.com"
              target="_blank"
              sx={{
                "&:hover": { color: "black" },
                color: "#ffffff",
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com"
              target="_blank"
              sx={{
                "&:hover": { color: "black" },
                color: "#ffffff",
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
