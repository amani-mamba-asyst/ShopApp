import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../Style/Menu.css";
import {
  Box,
  MenuItem,
  Toolbar,
  Badge,
  Typography,
  Button,
  IconButton,
  AppBar,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Drawer
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { UserContext } from "../ContextApi/Context";
import { LinkIntem } from "./MenuLinkIte";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../Store/Store";
import { addCarte, removeCartet } from "../../Store/Slice/Panier";

export function Menu() {
  const [isOpen, setisOpen] = useState(false);
  const [Items, setItems] = useState(LinkIntem);
  const { user, changeName } = useContext(UserContext);
  const countPanier = useSelector((state: RootState) => state.panier.count);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(LinkIntem);
  }, []);
  {
    user != "" ? "error" : "primary";
  }
  return (
    <>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={() => setisOpen(!isOpen)}
      >
        <List>
          {Items.map((txt, index) => {
            return (
              <Link to={txt.LinkApp}>
                <ListItem button key={txt.name}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={txt.name} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color={user != "" ? "primary" : "error"}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setisOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user}
            </Typography>

            <MenuItem></MenuItem>
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Link to="/Panier">
                  <Badge badgeContent={countPanier} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </IconButton>
            </MenuItem>
            {user != "" ? (
              <Button color="inherit" onClick={() => changeName("")}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={() => changeName("Ramses MBY")}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
