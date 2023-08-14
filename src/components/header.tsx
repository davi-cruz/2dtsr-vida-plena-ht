import PropTypes from "prop-types"
import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import Logo from "./logo"

interface Props {
  companyName: string
}

const useStyles = makeStyles(theme => ({
  appBar: {
    color: "#233348",
    backgroundColor: "#FFF",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  logo: {
    height: 62,
    width: 40,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  drawerList: {
    width: 250,
  },
  drawerToggle: {
    padding: 20,
  },
}))

const Header = ({ companyName }: Props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navLinks = [
    { displayText: "Home", link: "/" },
    { displayText: "Funcionalidades", link: "/funcionalidades" },
  ]

  return (
    <React.Fragment>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden smUp>
            <IconButton
              className={classes.drawerToggle}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link color="inherit" href="/">
            <Logo className={classes.logo} />
          </Link>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.toolbarTitle}
          >
            <Link color="inherit" href="/">
              {companyName}
            </Link>
          </Typography>

          <Hidden xsDown>
            {navLinks.map(item => (
              <Button color="inherit" key={item.displayText} href={item.link}>
                {item.displayText}
              </Button>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List className={classes.drawerList}>
          {navLinks.map((item, index) => (
            <ListItem button key={item.displayText}>
              <ListItemText primary={item.displayText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  )
}

Header.propTypes = {
  companyName: PropTypes.string,
  companyLogo: PropTypes.string,
}

Header.defaultProps = {
  companyName: `Contoso`,
  companyLogo: `logo.png`,
}

export default Header
