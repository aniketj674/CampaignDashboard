import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PopUp() {
  const [open, setOpen] = useState(true);
    return(
      <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={()=>{setOpen(false)}}
          aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Warning"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Please select end-date greater than start-date.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>{setOpen(false)}}>Close</Button>
        </DialogActions>
      </Dialog>
    );
}

export default PopUp;
