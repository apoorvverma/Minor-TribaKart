//import axios from 'axios';
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    "& > *": {
      margin: theme.spacing(3),
      width: "50ch",
      color: "green",
    },
  },
}));

const currencies = [
  {
    value: "first",
    label: "1st",
  },
  {
    value: "second",
    label: "2nd",
  },
  {
    value: "third",
    label: "3rd",
  },
];

export default function BasicTextFields() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Your Response is Recorded!", { variant });
  };

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h3>
        <em> Tell us about your bussiness </em>
      </h3>
      <div>
        <h6>Shop Owner</h6>
        <TextField
          required
          id="outlined-basic"
          label="name"
          variant="outlined"
          size="small"
          color="primary"
          fullWidth
        />
      </div>
      <div>
        <h6>Shop Name</h6>
        <TextField
          id="outlined-basic"
          label="Shop-name"
          variant="outlined"
          size="small"
          color="primary"
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select product category"
          value={currency}
          onChange={handleChange}
          helperText="Please select your product category"
          color="primary"
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <h4>
        <em> Enter your address </em>
      </h4>

      <div>
        <h6> Pincode </h6>
        <TextField
          id="outlined-basic"
          label="pin"
          variant="outlined"
          size="small"
          color="secondary"
          fullWidth
        />
      </div>
      <div>
        <h6> Address line 1</h6>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="filled"
          size="small"
          color="primary"
          fullWidth
        />
      </div>
      <div>
        <h6> Address Line 2</h6>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="filled"
          size="small"
          color="secondary"
          fullWidth
        />
      </div>
      <div>
        <h6> City</h6>
        <TextField
          id="outlined-basic"
          label="City"
          variant="filled"
          size="small"
          color="secondary"
          fullWidth
        />
      </div>
      <div>
        <h6> State</h6>
        <TextField
          id="outlined-basic"
          label="State"
          variant="filled"
          size="small"
          color="secondary"
          fullWidth
        />
      </div>
      <div>
        <h6> Country</h6>
        <TextField
          id="outlined-basic"
          label="Country"
          variant="filled"
          size="small"
          color="secondary"
          fullWidth
        />
      </div>
      <Button
        onClick={handleClickVariant("info")}
        size="medium"
        variant="contained"
        color="secondary"
      >
        <h5>Submit</h5>
      </Button>
    </form>
  );
}
