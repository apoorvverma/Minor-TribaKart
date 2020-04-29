import axios from "axios";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
// import 'react-datepicker/dist/react-datepicker.css';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(9),
  },
}));

const Editproduct = (props) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [product, setProduct] = useState([]);
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Product edited successfully!", { variant });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5050/products/" + props.match.params.id)
      .then((response) => {
        setDescription(response.data.description);
        setTitle(response.data.title);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5050/products/")
      .then((response) => {
        setProduct(response.data.map((user) => user.title));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const product = {
      title,
      description,
    };

    console.log(product);
    axios
      .post(
        "http://localhost:5050/products/update/" + props.match.params.id,
        product
      )
      .then((res) => console.log(res.data));
    window.location = "/";
  };
  return (
    <div className={classes.content}>
      <h3>Edit product Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <input
            onClick={handleClickVariant("info")}
            type="submit"
            value="Confirm Edit"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Editproduct;
