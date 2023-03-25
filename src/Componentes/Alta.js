import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Modal, Fade } from '@mui/material';
import axios from "axios"
function Alta() {
    //Usuario
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Mensaje 
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = ''
        try {
            const response = await axios.post("http://localhost:4000/usuarios", {
                username,
                email,
                password
            })



            setModalMessage(response.data.message);
            setModalOpen(true);

            setUsername('');
            setEmail('');
            setPassword('');

        } catch (error) {
            if (error.response && error.response.status === 409) {
                setModalMessage(error.response.data.message);
                setModalOpen(true);
            } else {
                setModalMessage("Ocurrió un error al registrar el usuario");
                setModalOpen(true);

            }

        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };



    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', my: 8, p: 3 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Registrar usuario
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                    Register
                </Button>
            </form>

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
        </Box>
    );
}

export default Alta;