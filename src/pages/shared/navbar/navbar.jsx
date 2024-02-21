import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { CgProfile } from "react-icons/cg";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/images/HomeImg/logo-light-vHhBX6Zj.png";
import { NavLink } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../firebase/provider/AuthProvider";
import useFetchingCartItem from "../../../hooks/useFetchingCartItem/useFetchingCartItem";

const pages = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "text-[#f58220]" : "")}
    >
      home
    </NavLink>
    <NavLink
      to="/deshes"
      className={({ isActive }) => (isActive ? "text-[#f58220]" : "")}
    >
      deshis
    </NavLink>
    <NavLink
      to="/menu"
      className={({ isActive }) => (isActive ? "text-[#f58220]" : "")}
    >
      menu
    </NavLink>
    <NavLink
      to="/contectus"
      className={({ isActive }) => (isActive ? "text-[#f58220]" : "")}
    >
      contect us
    </NavLink>
  </>
);

function Navbar() {
  const { data } = useFetchingCartItem();

  const { user, LogOut } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    LogOut();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="bg-[#040717] h-16 lg:h-20">
        <Toolbar disableGutters className="md:mx-10">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img className="w-36" src={logo} alt="" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  color: "black",
                }}
              >
                <Typography
                  className="inline-grid space-y-3 w-40 uppercase font-semibold"
                  textAlign="center"
                >
                  {pages}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            sx={{
              mr: 2,
              display: {
                xs: "flex",
                md: "none",
              },
              flexGrow: 1,
            }}
          >
            <img className="w-28" src={logo} alt="" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                display: "block",
                color: "white",
              }}
            >
              <i className="space-x-4 font-semibold"> {pages}</i>
            </Button>
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <div className="inline-flex text-2xl space-x-4 mt-2">
                <Link to="carts">
                  <Badge badgeContent={data?.length} color="warning">
                    <IoCartOutline />
                  </Badge>
                </Link>
                <Link to="favourite">
                  <Badge badgeContent={1} color="warning">
                    <MdOutlineFavorite className="text-red-500" />
                  </Badge>
                </Link>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <CgProfile className="text-white" />
                  </IconButton>
                </Tooltip>
              </div>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => handleLogOut()}>
                    LogOut
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <div className="text-[#f58220] font-bold inline-flex md:text-xl">
              <Link to="/login">
                <button className="mr-3">Login</button>
              </Link>
              <Link to="/singup">
                <button>Register</button>
              </Link>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
