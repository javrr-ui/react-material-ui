import { TextField, Button, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (isSubmitting) {
            // Aquí se puede enviar los datos al servidor utilizando una función asincrónica
            setIsSubmitting(false);
        }
    }, [isSubmitting]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post("http://localhost:4000/login",{
                username,
                password
            })

            const token = response.data.token;
            console.log(token)
        } catch (error) {
            console.error(error)
            setErrorMessage("Usuario o contraseña incorrectos")
        }
        setIsSubmitting(false)
    };

    return (
        <Box
        sx = {{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "relative",
            '::before': {
                content: '""',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(https://w0.peakpx.com/wallpaper/361/214/HD-wallpaper-fruits-color-fruit.jpg)',
                backgroundSize: 'cover'
              }
        }}
        >

            <Box sx={{backgroundColor: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(1px)', p: 4, borderRadius: 1 }}>
                <Typography variant="h4" gutterBottom>
                    Inicia sesión
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Usuario"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        sx={{ mb: 2 }}
                    />
                    {errorMessage && <Typography color="error" sx={{ mb: 2 }}>{errorMessage}</Typography>}
                    <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>
                        {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

export default LoginForm;