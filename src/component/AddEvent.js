import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from "@mui/system/styled";
import { Button, Paper } from '@mui/material';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-container": {
        alignItems: "flex-start",
        topPaperScrollBody: {
            verticalAlign: "top"
        },
        topScrollPaper: {
            alignItems: "flex-start"
        },
    }
}));

const defaultValues = {
    eventName: "",
    eventTimeFrom: "",
    eventTimeTo: ""
};

const FormDialog = ({ open, setOpen, setData, data }) => {

    const [input , setInput] = React.useState({
    });

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnChange = (e) => {
        
        setInput(
            values =>  ({... values, [e.target.name]: e.target.value })
        );

    }

    const handleSubmit = () => {
        setData(values => ([... values, input]))
        handleClose();
    }

    return (
        <React.Fragment>
            <StyledDialog open={open} onClose={handleClose} scroll="paper"
            >
                <DialogTitle>Add Event</DialogTitle>
                <DialogContent>
                    <Paper
                        style={{
                            display: "grid",
                            gridRowGap: "10px",
                            padding: "10px",
                            margin: "10px 100px",
                        }}
                    > 
                 
                            <TextField
                                name="eventName"
                                label="Event Name"
                                variant="outlined"
                                value={input?.eventName || ''}
                                onChange={handleOnChange}
                            />
                            <TextField
                                name="eventTimeFrom"
                                label="Event Time From"
                                variant="outlined"
                                value={input?.eventTimeFrom || ''}
                                onChange={handleOnChange}
                            />
                            <TextField
                                name="eventTimeTo"
                                label="Event Time To"
                                variant="outlined"
                                value={input?.eventTimeTo || ''}
                                onChange={handleOnChange}
                            />
                        
                        <Button variant={"contained"} onClick={handleSubmit}>
                            Add Event
                        </Button>

                    
                    </Paper>


                </DialogContent>
            </StyledDialog>
        </React.Fragment >
    );
};

export default FormDialog;