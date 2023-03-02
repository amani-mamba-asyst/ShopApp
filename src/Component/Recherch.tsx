import { useState, useContext, useEffect } from "react";
import {
  Typography,
  Button,
  Input,
  Stack,
  TextField,
  IconButton,
  Box,
  CircularProgress
} from "@mui/material";

import { UserContext } from "./ContextApi/Context";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { imagetable, UserProfile, foodFind } from "./ContextApi/Context";
import { useSelector, useDispatch } from "react-redux";
import { addCarte, removeCarte } from "../Store/Slice/Panier";
import { RootState } from "../Store/Store";
import { ListeBox } from "./ItemComponent/ListeBox";
export function Recherch() {
  const { user, changeName } = useContext(UserContext);
  const [mydata, setmydata] = useState([]);
  const [total, settotal] = useState(0);
  const [favori, setfavori] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [datasearch, setdatasearch] = useState(foodFind);

  const panierData = useSelector((state: RootState) => state.panier.panier);

  const search = (event: string) => {
    axios
      .get("https://dummyjson.com/products/search?q=" + event + "")
      .then((data) => {
        setmydata(data.data.products);
        settotal(data.data.total);
      });
  };

  useEffect(() => {
    search("");
    console.log(panierData);
  }, []);
  return (
    <Stack>
      <br />
      <Stack direction="row">
        <Button variant="outlined" color="primary">
          <Typography variant="h5">{total}</Typography>
        </Button>
        <TextField
          fullWidth
          label="Food"
          id="fullWidth"
          onChange={(event) => search(event.target.value)}
        />
      </Stack>
      <ListeBox data={mydata} />
    </Stack>
  );
}
