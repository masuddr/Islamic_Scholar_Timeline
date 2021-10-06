import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  bar: {
    background: "#3CB371",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
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
          Heroes of the Islam
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/timeline" className={classes.link}>
            Timeline

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
