import { Box, Modal, Typography,Button } from "@mui/material"
import { observer } from "mobx-react"
import React from "react"
import { useStore } from "../stores/StoreContext";
import { PartStore } from "../stores/PartStore";
import * as ButtonFunctions from "../logic_stuff/ButtonFunc"//imp

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const ModalSelectPart = observer(() => {
    const store = useStore()

    const handleClose = () => store.utilStore.modalsel.setModalSelectFalse();

    
    const handleSelClick = (id:string) => (e:any) => ButtonFunctions.setId(store,id)
    return(
        <Modal
            open={store.utilStore.modalsel.modalOpened}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Оберіть деталь
                </Typography>
                {
                store.parts.map(function(item:PartStore){
                    return <Button id="modal-modal-description" sx={{ mt: 2 }} onClick={handleSelClick(item.id)} key={item.id}>{item.id}</Button>
                })}
                
            </Box>
        </Modal>
    )
})
