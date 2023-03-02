import { Stack } from "@mui/material";
import ".././Style/Dorcard.css";
import { UserProfile } from "../ContextApi/Context";
import { ItemBox } from "./ItemBox";
// import SendIcon from "@mui/icon-material/send";

export function ListeBox(propos) {
  return (
    <Stack spacing={2} direction="column">
      {propos.data.map((event, index) => {
        return (
          <>
            <ItemBox
              id={event.id}
              profile={UserProfile[0]}
              categori={event.category}
              img={event.thumbnail}
              like={3000}
              title={event.title}
              message={event.stock}
              prix={event.price}
              produitItem={event.images}
              description={event.description}
            />
          </>
        );
      })}
    </Stack>
  );
}
