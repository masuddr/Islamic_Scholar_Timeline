import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function refreshPage() {
  window.location.reload(false);
}

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1.0",
    cursor: "pointer",
  },
  bar: {
    background: "#dec05f",
    position: "fixed",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "200",
    marginLeft: theme.spacing(15),
    "&:hover": {
      color: "#EEEDE7",
      transform: "scale(1.05)",
    },
  },
  header: {
    fontSize: "35px",
    textDecoration: "none",
    color: "white",
    marginLeft: theme.spacing(10),

    "&:hover": {
      color: "#EEEDE7",
      transform: "scale(1.5)",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.bar} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Link to="/" className={classes.header}>
            Heroes of the Islam
          </Link>
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search???"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link
            to="/timeline"
            onClick={() => {
              window.location.href = "/timeline";
            }}
            className={classes.link}
          >
            Scholars timeline
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
