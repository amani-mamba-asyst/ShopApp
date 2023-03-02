import * as React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Stack,
  Fab
} from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addCarte, removeCarte } from "../Store/Slice/Panier";
import { RootState } from "../Store/Store";

export function Panier() {
  const [open, setOpen] = React.useState(false);
  const [isloading, setisloading] = React.useState(false);
  const PanierData = useSelector((state: RootState) => state.panier.panier);

  const dispatch = useDispatch();
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {PanierData.length == 0 ? (
        <Stack
          direction="row"
          sx={{ display: "flex", justifycontent: "center" }}
        >
          <RemoveShoppingCartIcon />
        </Stack>
      ) : (
        <>
          {PanierData.map(() => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Brunch this weekend?" />
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="h6"
                    color="text.success"
                  >
                    <AttachMoneyIcon color="success" />
                    900
                  </Typography>
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </>
      )}

      <ListItem alignItems="flex-start">
        <Fab color="secondary" aria-label="add">
          <ShoppingCartIcon />
        </Fab>
        <Typography
          sx={{ display: "inline" }}
          component="span"
          variant="h6"
          color="text.success"
        >
          <AttachMoneyIcon color="success" />
          900
        </Typography>
      </ListItem>
    </List>
  );
}
