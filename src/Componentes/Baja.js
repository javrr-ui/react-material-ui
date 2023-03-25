import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText, Box, Button, Typography, Modal } from "@mui/material"
function Baja() {
    const [usuarios, setUsuarios] = useState([])

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        fetch("http://localhost:4000/usuarios")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setUsuarios(data)
                } else {
                    console.log(data)
                    setModalMessage(data.message)
                    setModalOpen(true)
                }
            })
    }, [])


    const eliminarUsuario = (userId) => {
        fetch(`http://localhost:4000/usuarios/${userId}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((data) => {

                setModalMessage(data.message)
                setModalOpen(true)
                setUsuarios((usuarios) => usuarios.filter((usuario) => usuario.userId !== userId))
            })
            .catch((error) => console.error(error))

    }

    const handleCloseModal = () => {
        setModalOpen(false);
      };

    const listItemStyle = {
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // sombreado
        marginBottom: '10px', // espacio entre elementos de la lista
        borderRadius: '5px', // borde redondeado
    };

    return (
        <div>


            <List>
                {usuarios.map((usuario, index) => (

                    <ListItem key={index} sx={listItemStyle}>
                        <ListItemText primary={usuario.username} secondary={usuario.email} />
                        <Button onClick={() => eliminarUsuario(usuario.userId)}>Eliminar</Button>
                    </ListItem>

                ))}
            </List>
            <Modal open={modalOpen} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="h2" gutterBottom>
                        {modalMessage}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleCloseModal}>
                        OK
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}


export default Baja