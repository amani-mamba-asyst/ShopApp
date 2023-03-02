import { useState, useEffect, useContext } from "react";
import {
  Stack,
  TextField,
  Button 
} from "@mui/material";
export function Login(){
    const [userName,setpserName] =useState("");
    const [uassword,setpassword] =useState("");
    const Dosubmit=()=>{

    }
    return (
        <>
        <Stack spacing={2} direction="column">
            <form>
            <TextField type="text"  label="UserName" name="UserName" variant="outlined" 
            onChange={(e)=>setpserName(event.target.value)}/>
             <TextField type="password"  label="Password" name="password" variant="outlined"
              onChange={(e)=>setpassword(event.target.value)}/>
            <Button type="submit" variant="outlined" color="primary"
             onClick={()=>Dosubmit()}>Connexion</Button>
            </form>

        </Stack>

        </>
    );
}