import React, { useState, useRef } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};
function ExchangeFrom(props) {
  let Dispaly = "";
  const amountRef = useRef(0);
  const couRef = useRef("");
  const [error, setError] = useState(false);
  const [content, setcontent] = useState([]);

  const { Rates, country } = props;

  //hadnler functions

  const selectCountryHandler = (event) => {
    couRef.current = event.target.value;
  };
  const amountHandler = (event) => {
    amountRef.current = +event.target.value;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!amountRef.current || !couRef.current || couRef.current < 0) {
      setError(true);
      alert("فرم را به صورت صحیح پر کنید");
    } else {
      setError(false);
      const existingItem = Rates.find((item) => item.id == couRef.current);
      setcontent(existingItem.rates);
    }
  };

  if (!error) {
    Dispaly = (
      <List sx={style} component="nav" aria-label="mailbox folders">
        {content.map((item, index) => (
          <ListItem>
            <ListItemText>{item.name}</ListItemText>
            <ListItemText>{item.rate * amountRef.current}</ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <Box>
      <Box width="50%">
        <FormControl size="small" fullWidth mb={3}>
          <InputLabel>country</InputLabel>
          <Select mb={3} label="country" onChange={selectCountryHandler}>
            {country.map((item, index) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <Box mt={2}>
            <TextField
              onChange={amountHandler}
              type="number"
              size="small"
              id="outlined-basic"
              label="amount"
              variant="outlined"
            />
          </Box>
        </FormControl>
        <Button onClick={submitHandler}>click</Button>
      </Box>
      <Box>{Dispaly}</Box>
    </Box>
  );
}

export default ExchangeFrom;
