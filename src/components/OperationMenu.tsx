import { observer } from "mobx-react"
import { useStore } from "../stores/StoreContext"
import { Box, Button, Drawer, Fade, Modal, Popper, SvgIcon, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { ParameterButton } from "./ParameterButton"
import "../styles/OperationMenu.css"
import React from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Icon from '@mui/material/Icon';
import Topleft from "../resources/icons/Topleft"
import Topright from "../resources/icons/Topright"
import Bottomleft from "../resources/icons/Bottomleft"
import Bottomright from "../resources/icons/Bottomright"

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



export const OperationMenu = observer(() => {
    const store = useStore()
    var selectedPart = store.parts.find(i => i.getPartId() === store.utilStore.getSelectedPart())!
    const [open, setOpen] = React.useState(false);
    const [openCut, setOpenCut] = React.useState(false);
    const [openCutFace, setOpenCutFace] = React.useState(false);

    const [text_one, setText_one] = React.useState("");
    const [text_two, setText_two] = React.useState("");
    const [text_three, setText_three] = React.useState("");
    const [text_four, setText_four] = React.useState("");

    const [alignment, setAlignment] = React.useState('topleft');
    const [alignmentFace, setAlignmentFace] = React.useState('left');

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpen((previousOpen) => !previousOpen);
        setText_one("")
        setText_two("")
        setText_three("")
        setText_four("")
    };
    const handleClose = () => {
        setOpen((previousOpen) => !previousOpen);
    }

    const handleClickCut = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenCut((previousOpen) => !previousOpen);
        setText_one("")
        setText_two("")
        setText_three("")
        setText_four("")
    };
    const handleCloseCut = () => {
        setOpenCut((previousOpen) => !previousOpen);
    }

    const handleClickCutFace = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenCutFace((previousOpen) => !previousOpen);
        setText_one("")
        setText_two("")
        setText_three("")
        setText_four("")
    };
    const handleCloseCutFace = () => {
        setOpenCutFace((previousOpen) => !previousOpen);
    }

    const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.selvedgeModeSwitch()
    };

    const handleChangeCut = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    const handleChangeCutFace = (
        event: React.MouseEvent<HTMLElement>,
        newAlignmentFace: string,
    ) => {
        setAlignmentFace(newAlignmentFace);
    };
    const controlCut = {
        value: alignment,
        onChange: handleChangeCut,
        exclusive: true,
    };
    const controlCutFace = {
        value: alignmentFace,
        onChange: handleChangeCutFace,
        exclusive: true,
    };

    return (
        <Drawer className="opMenuStyle" variant="persistent" anchor="left" open={store.utilStore.operationmenudrawerstate}>
            <Button onClick={handleClick2} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Крайкування</Button>
            <Button onClick={handleClick} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Свердління</Button>
            <Modal open={open} onClose={handleClose}>
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
                        selectedPart.addDrillOperation(parseFloat(text_one), parseFloat(text_two), parseFloat(text_three), parseFloat(text_four), "front")
                        setOpen((previousOpen) => !previousOpen)
                    }}>OK</Button>
                </Box>
            </Modal>
            <Button onClick={handleClickCut} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Зріз по площині</Button>
            <Modal  open={openCut} onClose={handleCloseCut}>
            <Box sx={style}>
                    <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={1}>
                        <Grid2 xs={12}>
                        <ToggleButtonGroup size="small" {...controlCut} aria-label="Small sizes">
                            <ToggleButton value = "topleft"><Topleft></Topleft></ToggleButton>
                            <ToggleButton value = "topright"><Topright></Topright></ToggleButton>
                            <ToggleButton value = "bottomleft"><Bottomleft></Bottomleft></ToggleButton>
                            <ToggleButton value = "bottomright"><Bottomright></Bottomright></ToggleButton>
                        </ToggleButtonGroup>
                        </Grid2>
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
                    </Grid2>
                    <Button onClick={() => {
                        selectedPart.addCutOperation(parseFloat(text_one), parseFloat(text_two), alignment)
                        setOpenCut((previousOpen) => !previousOpen)
                    }}>OK</Button>
                </Box>
            </Modal>
            
            <Button onClick={handleClickCutFace} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Зріз торця</Button>

            <Modal  open={openCutFace} onClose={handleCloseCutFace}>
            <Box sx={style}>
                    <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={1}>
                        <Grid2 xs={12}>
                        <ToggleButtonGroup size="small" {...controlCutFace} aria-label="Small sizes">
                            <ToggleButton value = "left"><Topleft></Topleft></ToggleButton>
                            <ToggleButton value = "right"><Topright></Topright></ToggleButton>
                            <ToggleButton value = "top"><Bottomleft></Bottomleft></ToggleButton>
                            <ToggleButton value = "bottom"><Bottomright></Bottomright></ToggleButton>
                        </ToggleButtonGroup>
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Кут:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="angle"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_one(event.target.value) }}
                            />
                        </Grid2>
                    </Grid2>
                    <Button onClick={() => {
                        selectedPart.addCutFaceOperation(parseFloat(text_one), alignmentFace)
                        setOpenCutFace((previousOpen) => !previousOpen)
                    }}>OK</Button>
                </Box>
            </Modal>

            <Button onClick={() => console.log(selectedPart.operationList)} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Радіус</Button>
            <Button onClick={() => console.log("WIP")} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Єврозамок</Button>
            <Button onClick={() => console.log("WIP")} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Паз закритий</Button>
            <Button onClick={() => console.log("WIP")} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Паз відкритий</Button>
            <Button onClick={() => console.log("WIP")} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Паз в торці</Button>
        </Drawer>

    )
})