import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "./Modal"

function PaginationD() {
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
      <Grid container spacing={2}>
        {data
          .slice((page - 1) * 20, (page - 1) * 20 + 20)
          .map((digimonInfo) => (
            <Grid item key={digimonInfo.name} xs={3}>
              <Button variant="text" onClick={() => handleClick(digimonInfo)}>
                {digimonInfo.name}
              </Button>
            </Grid>
          ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(data.length / 20)}
          page={page}
          onChange={handleChange}
        />
      </Stack>
      <Modal digimon={digimon} open={open} handleClose={handleClose}/>
    </div>
  );
}

export default PaginationD;
