import {
  Button,
  Stack,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  DialogTitle,
  Dialog,
  Box
} from "@mui/material";
import ".././Style/Dorcard.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCarte, removeCarte } from "../../Store/Slice/Panier";
import { RootState } from "../../Store/Store";

export function ItemBox(props) {
  const [open, setOpen] = React.useState(false);
  const [isloading, setisloading] = React.useState(false);
  const count = useSelector((state: RootState) => state.panier.count);

  const dispatch = useDispatch();
  const ShowAndHide = () => {
    setOpen((prevCheck) => !prevCheck);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addTopanier = (event: any) => {
    dispatch(addCarte(event));
  };

  return (
    <>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={props.profile}>
              R
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title={<Typography variant="h5">{props.title}</Typography>}
          subheader={props.categori}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Stack direction="row" spacing={5}>
            <Button variant="outlined" onClick={ShowAndHide}>
              <FormatListBulletedIcon />
            </Button>
            <Button onClick={() => addTopanier(props.id)} color="primary">
              <ShoppingCartIcon />
            </Button>
            <Button color="success">
              <AttachMoneyIcon />
              <Typography variant="h6" color="text.success">
                {props.prix}
              </Typography>
            </Button>
          </Stack>
        </CardActions>
      </Card>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Produi Similaire</DialogTitle>
        <Stack spacing={3} className="box-content">
          {props.produitItem.map((item) => (
            <img src={item} className="img" />
          ))}
        </Stack>
      </Dialog>
    </>
  );
}

// function DailogItemeBox({ children  }) {
//   return <>
//   </>;
// }
