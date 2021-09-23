import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles({
  pagination: {
    margin: "2em 0",
    display: "flex",
    justifyContent: "center",
  },
});

const NameButton = styled(Button)({
  color: "black",
  fontWeight: "bolder",
  "&:hover": {
    color: "white",
    backgroundColor: "#056aa6",
  },
});

function PaginationD() {
  const classes = useStyles();
  const [digimon, setDigimon] = useState({});
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon", {
      method: "GET",
    })
      .then((respuesta) => respuesta.json()) //se le da formato a la respuesta de la api
      .then((datos) => {
        setData(datos);
      });
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };
  function handleClick(digimonInfo) {
    setDigimon(digimonInfo);
    setOpen(true);
  }
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {data
          .slice((page - 1) * 20, (page - 1) * 20 + 20)
          .map((digimonInfo) => (
            <Grid
              item
              key={digimonInfo.name}
              xs={6}
              sm={6}
              md={3}
              lg={3}
              xl={3}
            >
              <NameButton
                variant="text"
                className={classes.button}
                onClick={() => handleClick(digimonInfo)}
              >
                {digimonInfo.name}
              </NameButton>
            </Grid>
          ))}
        <Grid item xs={12}>
          <Pagination
            className={classes.pagination}
            count={Math.ceil(data.length / 20)}
            page={page}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Modal digimon={digimon} open={open} handleClose={handleClose} />
    </div>
  );
}

export default PaginationD;
