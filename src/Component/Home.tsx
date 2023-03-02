import {
  Button,
  Stack,
  ButtonGroup,
  Slider,
  Switch,
  Badge,
  Chip,
  List
} from "@mui/material";
import { ListeBox } from "./ItemComponent/ListeBox";
import { useState, useEffect } from "react";
import axios from "axios";
export function Home() {
  const [mydata, setmydata] = useState([]);
  const [total, settotal] = useState(0);

  const [isloading, setisloading] = useState(false);
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
  }, []);
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Chip label="All" color="secondary"></Chip>
        <Chip label="Chassure" color="default"></Chip>
        <Chip label="informatique" color="default"></Chip>
        <Chip label="Electronique" color="default"></Chip>
        <Chip label="mecanique" color="default"></Chip>
      </Stack>

      <ListeBox data={mydata} />
    </Stack>
  );
}
