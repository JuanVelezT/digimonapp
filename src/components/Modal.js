import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
//en las props se recibe la informacion del modulo donde se llama a este componente
function Modal(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={props.digimon.img}
                alt={props.digimon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.digimon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.digimon.level}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
