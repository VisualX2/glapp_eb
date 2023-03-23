import { observer } from "mobx-react"
import React from "react";
import { PartStore } from "../../stores/PartStore";
import { Alert, Box, Button, Modal, Portal, Snackbar, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import "../../styles/OperationMenu.css"
import { drillPrep } from "../../logic_stuff/PreparatoryStages";

type DrillDialogParameters = {
    selectedPart: PartStore;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const DrillDialog: React.FC<DrillDialogParameters> = observer(({selectedPart}) => {

    const [open, setOpen] = React.useState(false);

    const [openError, setOpenError] = React.useState(false);
    const [errorText, setErrorText] = React.useState("");

    const [text_one, setText_one] = React.useState("");
    const [text_two, setText_two] = React.useState("");
    const [text_three, setText_three] = React.useState("");
    const [text_four, setText_four] = React.useState("");
    
    const handleClickDrill = () => {
        setOpen((previousOpen) => !previousOpen);
    };
    const handleCloseError = () => {
        setOpenError((previousOpen) => !previousOpen);
    };

    return(
        <React.Fragment>
            <Button onClick={handleClickDrill} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Свердління</Button>
            <Modal open={open} onClose={handleClickDrill}>
                    <Box sx={style}>
                        <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }}  rowGap={1}>
                            <Grid2 xs={3}>
                                <Typography variant="body1">
                                    X:
                                </Typography>
                            </Grid2>
                            <Grid2 xs={9}>
                                <TextField
                                    id="drillx"
                                    type="number"
                                    size="small"
                                    onChange={(event) => { setText_one(event.target.value) }}
                                />
                            </Grid2>
                            <Grid2 xs={3}>
                                <Typography variant="body1">
                                    Y:
                                </Typography>
                            </Grid2>
                            <Grid2 xs={9}>
                                <TextField
                                    id="drilly"
                                    type="number"
                                    size="small"
                                    onChange={(event) => { setText_two(event.target.value) }}
                                />
                            </Grid2>
                            <Grid2 xs={3}>
                                <Typography variant="body1">
                                    Глибина:
                                </Typography>
                            </Grid2>
                            <Grid2 xs={9}>
                                <TextField
                                    id="drillz"
                                    type="number"
                                    size="small"
                                    onChange={(event) => { setText_three(event.target.value) }}
                                />
                            </Grid2>
                            <Grid2 xs={3} alignItems="center">
                                <Typography variant="body1">
                                    Радіус:
                                </Typography>
                            </Grid2>
                            <Grid2 xs={9}>
                                <TextField
                                    id="drillrad"
                                    type="number"
                                    size="small"
                                    onChange={(event) => { setText_four(event.target.value) }}
                                />
                            </Grid2>
                        </Grid2>
                        <Button onClick={() => {
                            let r = drillPrep(parseFloat(text_one), parseFloat(text_two), parseFloat(text_three), parseFloat(text_four), "front", selectedPart.width, selectedPart.height)
                            if(r === "success"){
                                selectedPart.addDrillOperation(parseFloat(text_one), parseFloat(text_two), parseFloat(text_three), parseFloat(text_four), "front")
                                handleClickDrill()
                            }
                            else {
                                setOpenError(true)
                                setErrorText(r)
                            }
                            
                        }}>OK</Button>
                    </Box>
                    
                </Modal>
                <Portal>
                    <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                        {errorText}
                        </Alert>
                    </Snackbar>
                </Portal>
            </React.Fragment>
    )
})