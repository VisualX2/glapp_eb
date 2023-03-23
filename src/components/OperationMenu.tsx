import { observer } from "mobx-react"
import { useStore } from "../stores/StoreContext"
import { Box, Button, Drawer, Fade, Modal, Popper, SvgIcon, Switch, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { ParameterButton } from "./ParameterButton"
import "../styles/OperationMenu.css"
import React from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Icon from '@mui/material/Icon';
import Topleft from "../resources/icons/Topleft"
import Topright from "../resources/icons/Topright"
import Bottomleft from "../resources/icons/Bottomleft"
import Bottomright from "../resources/icons/Bottomright"
import * as op from "../logic_stuff/OperationObjects"
import { isCornerCut, isCut, isRadius } from "../logic_stuff/CheckOps"
import { DrillDialog } from "./OperationDialogs/DrillDialog"


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
    const [openCut, setOpenCut] = React.useState(false);
    const [openCutFace, setOpenCutFace] = React.useState(false);
    const [openRadius, setOpenRadius] = React.useState(false);
    const [openGroove, setOpenGroove] = React.useState(false);
    const [openSideGroove, setOpenSideGroove] = React.useState(false);
    const [openPCut, setOpenPCut] = React.useState(false);
    const [openCornerCut, setOpenCornerCut] = React.useState(false);

    const [text_one, setText_one] = React.useState("");
    const [text_two, setText_two] = React.useState("");
    const [text_three, setText_three] = React.useState("");
    const [text_four, setText_four] = React.useState("");
    const [text_five, setText_five] = React.useState("");
    const [text_six, setText_six] = React.useState("");

    const [alignment, setAlignment] = React.useState('topleft');
    const [alignmentFace, setAlignmentFace] = React.useState('left');
    const [alignmentRadius, setAlignmentRadius] = React.useState('topleft');
    const [alignmentSideGroove, setAlignmentSideGroove] = React.useState('left');
    const [alignmentPCut, setAlignmentPCut] = React.useState('left');
    const [alignmentCornerCut, setAlignmentCornerCut] = React.useState('topleft');

    const clearTb = () => {
        setText_one("")
        setText_two("")
        setText_three("")
        setText_four("")
        setText_five("")
        setText_six("")
    }

    

    const handleClickCut = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenCut((previousOpen) => !previousOpen);
        clearTb()
    };
    const handleCloseCut = () => {
        setOpenCut((previousOpen) => !previousOpen);
    }

    const handleClickCutFace = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenCutFace((previousOpen) => !previousOpen);
        clearTb()
    };
    const handleCloseCutFace = () => {
        setOpenCutFace((previousOpen) => !previousOpen);
    }

    const handleClickRadius = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenRadius((previousOpen) => !previousOpen);
        clearTb()
    };
    const handleCloseRadius = () => {
        setOpenRadius((previousOpen) => !previousOpen);
    }
    const handleClickGroove = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenGroove((previousOpen) => !previousOpen);
        clearTb()
    };
    const handleCloseGroove = () => {
        setOpenGroove((previousOpen) => !previousOpen);
    }

    const handleClickSideGroove = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenSideGroove((previousOpen) => !previousOpen);
        clearTb()
    };
    const handleCloseSideGroove = () => {
        setOpenSideGroove((previousOpen) => !previousOpen);
    }

    const handleClickPCut = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenPCut((previousOpen) => !previousOpen);
        clearTb()
    };
    const handleClosePCut = () => {
        setOpenPCut((previousOpen) => !previousOpen);
    }

    const handleClickCornerCut = (event: React.MouseEvent<HTMLElement>) => {
        store.utilStore.sevst.setSelvedgeModeFalse()
        setOpenCornerCut((previousOpen) => !previousOpen);
        clearTb()
    };
    const handleCloseCornerCut = () => {
        setOpenCornerCut((previousOpen) => !previousOpen);
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
    const handleChangeRadius = (
        event: React.MouseEvent<HTMLElement>,
        newAlignmentRadius: string,
    ) => {
        setAlignmentRadius(newAlignmentRadius);
    };
    const handleChangeSideGroove = (
        event: React.MouseEvent<HTMLElement>,
        newAlignmentSideGroove: string,
    ) => {
        setAlignmentSideGroove(newAlignmentSideGroove);
    };
    const handleChangePCut = (
        event: React.MouseEvent<HTMLElement>,
        newAlignmentPCut: string,
    ) => {
        setAlignmentPCut(newAlignmentPCut);
    };
    const handleChangeCornerCut = (
        event: React.MouseEvent<HTMLElement>,
        newAlignmentCornerCut: string,
    ) => {
        setAlignmentCornerCut(newAlignmentCornerCut);
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
    const controlRadius = {
        value: alignmentRadius,
        onChange: handleChangeRadius,
        exclusive: true,
    };
    const controlSideGroove = {
        value: alignmentSideGroove,
        onChange: handleChangeSideGroove,
        exclusive: true,
    };
    const controlPCut = {
        value: alignmentPCut,
        onChange: handleChangePCut,
        exclusive: true,
    };
    const controlCornerCut = {
        value: alignmentCornerCut,
        onChange: handleChangeCornerCut,
        exclusive: true,
    };

    return (
        <Drawer className="opMenuStyle" variant="persistent" anchor="left" open={store.utilStore.operationmenudrawerstate}>
            <Button onClick={handleClick2} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Крайкування</Button>
            <DrillDialog selectedPart={selectedPart}></DrillDialog>
            
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

            <Button onClick={handleClickRadius} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Радіус</Button>
            
            <Modal  open={openRadius} onClose={handleCloseRadius}>
            <Box sx={style}>
                    <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={1}>
                        <Grid2 xs={12}>
                        <ToggleButtonGroup size="small" {...controlRadius} aria-label="Small sizes">
                            <ToggleButton value = "topleft"><Topleft></Topleft></ToggleButton>
                            <ToggleButton value = "topright"><Topright></Topright></ToggleButton>
                            <ToggleButton value = "bottomleft"><Bottomleft></Bottomleft></ToggleButton>
                            <ToggleButton value = "bottomright"><Bottomright></Bottomright></ToggleButton>
                        </ToggleButtonGroup>
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Радіус:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="radius"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_one(event.target.value) }}
                            />
                        </Grid2>
                    </Grid2>
                    <Button onClick={() => {
                        
                        if(selectedPart.getList().some((e => isCut(e) && e.corner === alignmentRadius) || (e => isCornerCut(e) && e.corner === alignmentRadius))){
                            selectedPart.removeOperation(selectedPart.getList().find((e => isCut(e) && e.corner === alignmentRadius) || (e => isCornerCut(e) && e.corner === alignmentRadius))!.id)
                        }

                        selectedPart.addRadiusOperation(parseFloat(text_one), alignmentRadius)
                        setOpenRadius((previousOpen) => !previousOpen)
                    }}>OK</Button>
                </Box>
            </Modal>

            <Button onClick={() => console.log("WIP")} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Єврозамок</Button>
            <Button onClick={handleClickGroove} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Паз закритий</Button>
            
            <Modal  open={openGroove} onClose={handleCloseGroove}>
            <Box sx={style}>
                    <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={1}>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                X:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="X"
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
                                id="Y"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_two(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                X2:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="x2"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_three(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Y2:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="y2"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_five(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Глибина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="depth"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_four(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Ширина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="width"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_six(event.target.value) }}
                            />
                        </Grid2>
                    </Grid2>
                    <Button onClick={() => {
                        selectedPart.addGrooveOperation(parseFloat(text_one), parseFloat(text_two), parseFloat(text_three), parseFloat(text_four), parseFloat(text_five) , parseFloat(text_six))
                        setOpenGroove((previousOpen) => !previousOpen)
                    }}>OK</Button>
                </Box>
            </Modal>

            <Button onClick={handleClickSideGroove} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Паз в торці</Button>
            
            <Modal  open={openSideGroove} onClose={handleCloseSideGroove}>
            <Box sx={style}>
                    <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={1}>
                        <Grid2 xs={12}>
                            <ToggleButtonGroup size="small" {...controlSideGroove} aria-label="Small sizes">
                                <ToggleButton value = "left"><Topleft></Topleft></ToggleButton>
                                <ToggleButton value = "right"><Topright></Topright></ToggleButton>
                                <ToggleButton value = "top"><Bottomleft></Bottomleft></ToggleButton>
                                <ToggleButton value = "bottom"><Bottomright></Bottomright></ToggleButton>
                            </ToggleButtonGroup>
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                X:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="X"
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
                                id="Y"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_two(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                X2:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="x2"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_three(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Y2:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="y2"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_four(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Глибина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="depth"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_five(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Ширина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="width"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_six(event.target.value) }}
                            />
                        </Grid2>
                    </Grid2>
                    <Button onClick={() => {
                        selectedPart.addSideGrooveOperation(parseFloat(text_one), parseFloat(text_two), parseFloat(text_three), parseFloat(text_four), parseFloat(text_five) , parseFloat(text_six), alignmentSideGroove)
                        setOpenSideGroove((previousOpen) => !previousOpen)
                    }}>OK</Button>
                </Box>
            </Modal>
            <Button onClick={handleClickPCut} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">P - виріз</Button>

            <Modal  open={openPCut} onClose={handleClosePCut}>
            <Box sx={style}>
                    <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={1}>
                        <Grid2 xs={12}>
                            <ToggleButtonGroup size="small" {...controlPCut} aria-label="Small sizes">
                                <ToggleButton value = "left"><Topleft></Topleft></ToggleButton>
                                <ToggleButton value = "right"><Topright></Topright></ToggleButton>
                                <ToggleButton value = "top"><Bottomleft></Bottomleft></ToggleButton>
                                <ToggleButton value = "bottom"><Bottomright></Bottomright></ToggleButton>
                            </ToggleButtonGroup>
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Відступ:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="XGap"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_one(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Довжина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="Width"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_two(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Ширина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="Height"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_three(event.target.value) }}
                            />
                        </Grid2>
                    </Grid2>
                    <Button onClick={() => {
                        selectedPart.addPCut(parseFloat(text_one), parseFloat(text_two), parseFloat(text_three), alignmentPCut)
                        setOpenPCut((previousOpen) => !previousOpen)
                    }}>OK</Button>
                </Box>
            </Modal>
            <Button onClick={handleClickCornerCut} sx={{ fontSize: "10px", textTransform: "none", paddingBottom: "0px", color: "black" }} className="Button">Кутовий виріз</Button>

            <Modal  open={openCornerCut} onClose={handleCloseCornerCut}>
            <Box sx={style}>
                    <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={1}>
                        <Grid2 xs={12}>
                            <ToggleButtonGroup size="small" {...controlCornerCut} aria-label="Small sizes">
                                <ToggleButton value = "topleft"><Topleft></Topleft></ToggleButton>
                                <ToggleButton value = "topright"><Topright></Topright></ToggleButton>
                                <ToggleButton value = "bottomleft"><Bottomleft></Bottomleft></ToggleButton>
                                <ToggleButton value = "bottomright"><Bottomright></Bottomright></ToggleButton>
                            </ToggleButtonGroup>
                        </Grid2>
                        
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Довжина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="Width"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_one(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2 xs={3}>
                            <Typography variant="body1">
                                Ширина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}>
                            <TextField
                                id="Height"
                                type="number"
                                size="small"
                                onChange={(event) => { setText_two(event.target.value) }}
                            />
                        </Grid2>
                    </Grid2>
                    <Button onClick={() => {
                        if(selectedPart.getList().some((e => isCut(e) && e.corner === alignmentCornerCut) || (e => isRadius(e) && e.side === alignmentCornerCut))){
                            selectedPart.removeOperation(selectedPart.getList().find((e => isCut(e) && e.corner === alignmentCornerCut) || (e => isRadius(e) && e.side === alignmentCornerCut))!.id)
                        }
                        selectedPart.addCornerCut(parseFloat(text_one), parseFloat(text_two), alignmentCornerCut)
                        setOpenCornerCut((previousOpen) => !previousOpen)
                    }}>OK</Button>
                </Box>
            </Modal>
        </Drawer>

    )

})