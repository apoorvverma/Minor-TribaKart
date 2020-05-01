import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { SnackbarProvider, useSnackbar } from "notistack";
import { IconButton, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(9),
  },
}));

const Product = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("You are in Edit Mode!", { variant });
  };
  const handleClickVariant2 = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Product Deleted successfully!", {
      variant,
    });
  };

  const {
    product: { title, description, _id },
  } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <Link to={"/edit/" + _id} onClick={handleClickVariant("info")}>
          <IconButton variant="contained" color="primary">
            <EditIcon />
          </IconButton>
        </Link>
        <a
          href="#"
          onClick={() => {
            props.deleteProduct(_id);
          }}
        >
          <IconButton
            variant="contained"
            color="primary"
            onClick={handleClickVariant2("info")}
          >
            <DeleteIcon />
          </IconButton>
          {/* </Button> */}
        </a>
      </td>
    </tr>
  );
};

const ProductsList = () => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/products/")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete("http://localhost:5050/products/" + id)
      .then((res) => console.log(res.data));
    setProduct(products.filter((el) => el._id !== id));
  };

  const productList = () => {
    return products.map((currentproduct) => {
      return (
        <Product
          product={currentproduct}
          deleteProduct={deleteProduct}
          key={currentproduct._id}
        />
      );
    });
  };

  return (
    <div className={classes.content}>
      <h3>Logged products</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{productList()}</tbody>
      </table>
    </div>
  );
};

export default ProductsList;
