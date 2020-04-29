import axios from "axios";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(9),
  },
}));
const CreateUser = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
    };
    console.log(newUser);
    axios
      .post("http://localhost:5050/users/add", newUser)
      .then((res) => console.log(res.data));
  };
  return (
    <div className={classes.content}>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
