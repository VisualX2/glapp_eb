import { observer } from "mobx-react"
import React from "react";

import { PartStore } from "../../stores/PartStore";
import { Alert, Box, Button, MenuItem, Modal, Portal, Select, Snackbar, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

import tools from "../../config/tools.json"

type OperationDialogParameters = {
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

interface Tool {
    diameter: number;
    maxdepth: number;
}