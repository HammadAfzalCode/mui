import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">Hello h1 </Typography>
      <Typography variant="h2">Hello h2 </Typography>
      <Typography variant="h3">Hello h3 </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        Hello h4{" "}
      </Typography>
      <Typography variant="h5">Hello h5 </Typography>
      <Typography variant="h6">Hello h6 </Typography>
      <Typography variant="subtitle1">Hello subtitle 1 </Typography>
      <Typography variant="subtitle2">Hello subtitle 2 </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        similique sit necessitatibus, cumque iste saepe facere in ullam! Nisi
        fugit molestiae quam ea nostrum excepturi impedit recusandae aspernatur
        numquam dolorem?
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus dolore
        quasi reiciendis vel iusto temporibus dignissimos sapiente est deserunt,
        culpa aut enim distinctio maiores quod optio, minus fuga cumque iste!
      </Typography>
    </div>
  );
};

export default MuiTypography;
